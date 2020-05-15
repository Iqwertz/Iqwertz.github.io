////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////Bluetooth Web Api////////////////////////////////////////////
////////Using Code from the Google Chrome Web Ble example////////////

var charackteristicsCache = null;
var serviceUuid = "0xFFE0";
var characteristicUuid = "0xFFE1";
var deviceCache = null;
var readBuffer = '';
var currentServiceUuid;
var currentCharacteristicUuid;

function onStartButtonClick() {
    if (serviceUuid.startsWith('0x')) {
        currentServiceUuid = parseInt(serviceUuid);
    }

    if (characteristicUuid.startsWith('0x')) {
        currentCharacteristicUuid = parseInt(characteristicUuid);
    }
    console.log('Requesting Bluetooth Device...');
    navigator.bluetooth.requestDevice({filters: [{services: [currentServiceUuid]}]})
        .then(device => {
        console.log('Connecting to GATT Server...');
        console.log('Connected to '+ device.name)
        deviceCache = device;
        deviceCache.addEventListener('gattserverdisconnected', handleDisconnection);

        return device.gatt.connect();
    })
        .then(server => {
        console.log('Getting Service...');
        return server.getPrimaryService(currentServiceUuid);
    })
        .then(service => {
        console.log('Getting Characteristic...');
        return service.getCharacteristic(currentCharacteristicUuid);
    })
        .then(characteristic => {
        charackteristicsCache = characteristic;
        return charackteristicsCache.startNotifications().then(_ => {

            console.log('> Notifications started');
            charackteristicsCache.addEventListener('characteristicvaluechanged',     handleNotifications);
            SetBleVar(true);
            send("SdStat");
        });
    })
        .catch(error => {
        console.log('Argh! ' + error);
    });
}

function handleDisconnection(event) {   //function that tries to reconnect if connection is suddenly lost
    SetBleVar(false);
    let device = event.target;
    console.log('"' + device.name +
                '" bluetooth device disconnected, trying to reconnect...');
    connectDeviceAndCacheCharacteristic(device).
    then(characteristic => {
        charackteristicsCache = characteristic;
        return charackteristicsCache.startNotifications().then(_ => {

            console.log('> Notifications started');
            charackteristicsCache.addEventListener('characteristicvaluechanged',     handleNotifications);
            SetBleVar(true);
        });
    }).
    catch(error => console.log(error));
}

function connectDeviceAndCacheCharacteristic(device) {
    if (device.gatt.connected && characteristicCache) {
        return Promise.resolve(characteristicCache);
    }

    console.log('Connecting to GATT server...');

    return device.gatt.connect().
    then(server => {
        console.log('GATT server connected, getting service...');

        return server.getPrimaryService(0xFFE0);
    }).
    then(service => {
        console.log('Service found, getting characteristic...');

        return service.getCharacteristic(0xFFE1);
    }).
    then(characteristic => {
        console.log('Characteristic found');
        characteristicCache = characteristic;

        return characteristicCache;
    });
}

function handleNotifications(event) {
    let value = event.target.value;
    let text = new TextDecoder().decode(event.target.value);
    for (let c of text) {
        if (c === '\n') {
            let data = readBuffer.trim();
            readBuffer = '';
            if (data) {
                console.log(data); 
                if(!AddingTest){
                    if(data.charAt(0)=="V"){
                        addData(Number(data.substr(1)));
                    }else if (data.charAt(0)=="C"){
                        console.log(data.substr(1));
                    }else if (data=="SDfalse"){
                        alert("Attention! No Sd Card! Restart the Arduino if Sd card is inserted");
                    }
                }else{
                    BleSendTestData(data);
                }
            }
        }
        else {
            readBuffer += c;
        }
    }
}

function send(data) {    //function that sends data and splits it up if to big
    data = String(data);

    console.log("Sending: "+ data)

    if (!data || !charackteristicsCache) {
        return;
    }

    if (data.length > 20) {
        let chunks = data.match(/(.|[\r\n]){1,20}/g);

        writeToCharacteristic(charackteristicsCache, chunks[0]);

        for (let i = 1; i < chunks.length; i++) {
            setTimeout(() => {
                writeToCharacteristic(charackteristicsCache, chunks[i]);
            }, i * 100);
        }
    }
    else {
        writeToCharacteristic(charackteristicsCache, data);
    }
}

function writeToCharacteristic(characteristic, data) {
    characteristic.writeValue(new TextEncoder().encode(data));
} 

function SetBleVar(state){
    var scope = angular.element(document.getElementById("ControlsId")).scope();
    scope.$apply(function(){
        scope.BleStatus = state;
    })
}