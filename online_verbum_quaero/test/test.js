var table;

function preload() {
  table = loadTable("data/Vocstest.csv", "csv", "header");      //Ladet die daten Tabelle
}

function setup() {
 
  var x="a"
    var rows = table.matchRows(x, 'Latein');
    console.log(rows);
  for (var i = 0; i < rows.length; i++) {
    print(rows[i].getString('Latein') + ': ' + rows[i].getString('Deutsch'));
  }
}
