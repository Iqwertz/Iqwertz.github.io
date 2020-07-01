<html>
    <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-131500551-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-131500551-1');
        </script>
        <!-- <link rel="stylesheet" src="CSS/RaummessungStyle.css" />!-->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="CSS/componen.css">
        <style>
            body {
                overflow: hidden;
                width: 100%;
                height: 100%;
                padding: 0;
                margin: 0;
            }
            .clearfix:after {  content: "."; display:block; font-size:0; line-height:0; height:0; clear:both; visibility:hidden; }
            .clearfix { display:inline-block; }		
            * html .clearfix { height:1%; }
            .clearfix { display:block; }

            body {margin:0; -webkit-text-size-adjust:100%; -moz-text-size-adjust:100%; font:14px/24px 'Open Sans', Helvetica, Arial, sans-serif  ; color:#000;}	
            #wrapper { background:#FFF; width:1200px; margin:0 auto; border:solid 0px #E7E7E7; border-top:5px solid #0088cc; border-radius:6px; box-shadow:0 0 3px rgba(0,0,0,0.2), inset 0 4px 0 #ededed }
            #logo { display:inline-block; font-weight:300;  margin:0 0 0px; font-size:30px; line-height:24px;  color:#000; text-decoration:none; position:relative;  }
            #logo span{ color:#0088cc;}

            section { padding:0 20px 20px}

            h2, h1{ font:300 22px/30px 'Open Sans', sans-serif;  margin:0 0 10px 0; padding:0}
            h1{font-size:90px; line-height:40px;}

            h2 span{color:#0088cc;}
            .classname { display:block;  padding:20px;  border:solid 2px #CCC; text-align:center;}

            hr{ padding:0; margin:50px 0; height:1px; border:0; background:rgba(0,0,0,.2); box-shadow:0 1px 0 rgba(255,255,255, 0.8)  }
            /* Slider wrapper*/
            .css-slider-wrapper {
                display: block;
                background: #FFF;
                overflow: hidden;
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
            }
            /* Slider */
            .slider {
                width: 100%;
                height: 100%;
                background: red;
                position: absolute;
                left: 0;
                top: 0;
                opacity: 1;
                z-index: 0;
                display: flex;
                display: -webkit-flex;
                display: -ms-flexbox;
                flex-direction: row;
                flex-wrap: wrap;
                -webkit-flex-align: center;
                -webkit-align-items: center;
                align-items: center;
                justify-content: center;
                align-content: center;
                -webkit-transition: -webkit-transform 1600ms;
                transition: -webkit-transform 1600ms, transform 1600ms;
                -webkit-transform: scale(1);
                transform: scale(1);
            }
            /* each slide backgound color */  
            .slide1 {
                background: #1aa34a;
                left: 0;
            }
            .slide2 {
                background: #009788;
                left: 100%
            }
            .slide3 {
                background: #ff5608;
                left: 200%
            }
            .slide4 {
                background: #79091e;
                left: 300%;
            }
            .slide5 {
                background: #607d8d;
                left: 400%;
            }
            .slider > div {
                text-align: center;
            }
            /* Slider inner slide effect */

            .slider .header{
                color: #FFF;
                font-weight: 100;
                text-transform: uppercase;
                font-size: 35px;
                line-height: 10%;
                opacity: 0;
                -webkit-transform: translateX(500px);
                transform: translateX(500px);
            }
            .slider h1 {
                color: #FFF;
                font-weight: 800;
                text-transform: uppercase;
                font-size: 150px;
                line-height: 100%;
                opacity: 0;
                -webkit-transform: translateX(-500px);
                transform: translateX(-500px);

            }

            .slider h2 {
                color: #FFF;
                font-weight: 900;
                text-transform: uppercase;
                font-size: 35px;
                line-height: 10%;
                opacity: 0;
                -webkit-transform: translateX(500px);
                transform: translateX(500px);
            }
            .slider .header h2{
                line-height: 100%;
            }
            .Einheit {
                display: inline;
                color: #FFF;
                font-weight: 1;
                text-transform: uppercase;
                font-size: 20px;
                line-height: 10%;
            }
            .Zeit{
                display: inline;
                color: #FFF;
                font-weight: 1;
                text-transform: uppercase;
                font-size: 20px;
                line-height: 150%;
            }
            .slider .button {
                color: #FFF;
                padding: 5px 30px;
                background: rgba(255,255,255,0.3);
                text-decoration: none;
                opacity: 0;
                font-size: 15px;
                line-height: 30px;
                display: inline-block;
                -webkit-transform: translateX(-500px);
                transform: translateX(-500px);
            }
            .slider h2, .slider .button {
                -webkit-transition: opacity 800ms, -webkit-transform 800ms;
                transition: transform 800ms, opacity 800ms;
                -webkit-transition-delay: 1s; /* Safari */
                transition-delay: 1s;
            }
            .slider h1, .slider .button {
                -webkit-transition: opacity 800ms, -webkit-transform 800ms;
                transition: transform 800ms, opacity 800ms;
                -webkit-transition-delay: 1s; /* Safari */
                transition-delay: 1s;
            }
            .slider .header, .slider .button {
                -webkit-transition: opacity 800ms, -webkit-transform 800ms;
                transition: transform 800ms, opacity 800ms;
                -webkit-transition-delay: 1s; /* Safari */
                transition-delay: 1s;
            }
            /* Next and Preive arrow */ 
            .control {
                position: absolute;
                top: 50%;
                width: 50px;
                height: 50px;
                margin-top: -25px;
                z-index: 55;
            }
            .control label {
                z-index: 0;
                display: none;
                text-align: center;
                line-height: 50px;
                font-size: 50px;
                color: #FFF;
                cursor: pointer;
                opacity: 0.2;
            }
            .control label:hover {
                opacity: 0.5;
            }
            .next {
                right: 1%;
            }
            .previous {
                left: 1%;
            }
            /* Slider Pagger */ 
            .slider-pagination {
                position: absolute;
                bottom: 20px;
                width: 100%;
                left: 0;
                text-align: center;
                z-index: 1000;
            }
            .slider-pagination label {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                display: inline-block;
                background: rgba(255,255,255,0.2);
                margin: 0 2px;
                border: solid 1px rgba(255,255,255,0.4);
                cursor: pointer;
            }
            /* Slider Pagger arrow event */
            .slide-radio1:checked ~ .next .numb2, 
            .slide-radio2:checked ~ .next .numb3, 
            .slide-radio3:checked ~ .next .numb4, 
            .slide-radio4:checked ~ .next .numb5, 
            .slide-radio2:checked ~ .previous .numb1, 
            .slide-radio3:checked ~ .previous .numb2, 
            .slide-radio4:checked ~ .previous .numb3,
            .slide-radio5:checked ~ .previous .numb4 {
                display: block;
                z-index: 1
            }
            /* Slider Pagger event */
            .slide-radio1:checked ~ .slider-pagination .page1, 
            .slide-radio2:checked ~ .slider-pagination .page2, 
            .slide-radio3:checked ~ .slider-pagination .page3, 
            .slide-radio4:checked ~ .slider-pagination .page4,
            .slide-radio5:checked ~ .slider-pagination .page5 {
                background: rgba(255,255,255,1)
            }
            /* Slider slide effect */
            .slide-radio1:checked ~ .slider {
                -webkit-transform: translateX(0%);
                transform: translateX(0%);
            }
            .slide-radio2:checked ~ .slider {
                -webkit-transform: translateX(-100%);
                transform: translateX(-100%);
            }
            .slide-radio3:checked ~ .slider {
                -webkit-transform: translateX(-200%);
                transform: translateX(-200%);
            }
            .slide-radio4:checked ~ .slider {
                -webkit-transform: translateX(-300%);
                transform: translateX(-300%);
            }
            .slide-radio5:checked ~ .slider {
                -webkit-transform: translateX(-400%);
                transform: translateX(-400%);
            }
            .slide-radio1:checked ~ .slide1 .header,  
            .slide-radio2:checked ~ .slide2 .header,  
            .slide-radio3:checked ~ .slide3 .header,  
            .slide-radio4:checked ~ .slide4 .header, 
            .slide-radio5:checked ~ .slide5 .header, 
            .slide-radio1:checked ~ .slide1 h1,  
            .slide-radio2:checked ~ .slide2 h1,  
            .slide-radio3:checked ~ .slide3 h1,  
            .slide-radio4:checked ~ .slide4 h1, 
            .slide-radio5:checked ~ .slide5 h1, 
            .slide-radio1:checked ~ .slide1 h2,  
            .slide-radio2:checked ~ .slide2 h2,  
            .slide-radio3:checked ~ .slide3 h2,  
            .slide-radio4:checked ~ .slide4 h2,  
            .slide-radio5:checked ~ .slide5 h2,  
            .slide-radio1:checked ~ .slide1 .button,  
            .slide-radio2:checked ~ .slide2 .button,  
            .slide-radio3:checked ~ .slide3 .button,  
            .slide-radio4:checked ~ .slide4 .button,
            .slide-radio5:checked ~ .slide5 .button {
                -webkit-transform: translateX(0);
                transform: translateX(0);
                opacity: 1
            }

            @media only screen and (max-width: 767px) {
                .slider h2 {
                    font-size: 500px;
                }
                .slider > div {
                    padding: 0 2%
                }
                .control label {
                    font-size: 50px;
                }
                .slider .button {
                    padding: 0 15px;
                }
            }
            .btn-circle.btn-lg {
                position: absolute;
                width: 50px;
                height: 50px;
                padding: 10px 16px;
                font-size: 18px;
                line-height: 1.33;
                border-radius: 25px;
                top: -12px;
                left: 10px;
            }

            .cust{
                position: absolute;
                z-index: 55;  
            }
        </style>
    </head>

    <body>
        <div class="css-slider-wrapper">
            <input type="radio" name="slider" class="slide-radio1" checked id="slider_1">
            <input type="radio" name="slider" class="slide-radio2" id="slider_2">
            <input type="radio" name="slider" class="slide-radio3" id="slider_3">
            <input type="radio" name="slider" class="slide-radio4" id="slider_4">
            <input type="radio" name="slider" class="slide-radio5" id="slider_5">

            <div class="slider-pagination">
                <label for="slider_1" class="page1"></label>
                <label for="slider_2" class="page2"></label>
                <label for="slider_3" class="page3"></label>
                <label for="slider_4" class="page4"></label>
                <label for="slider_5" class="page5"></label>
            </div>
            <div class="next control">
                <label for="slider_1" class="numb1"><i class="fa fa-arrow-circle-right"></i></label>
                <label for="slider_2" class="numb2"><i class="fa fa-arrow-circle-right"></i></label>
                <label for="slider_3" class="numb3"><i class="fa fa-arrow-circle-right"></i></label>
                <label for="slider_4" class="numb4"><i class="fa fa-arrow-circle-right"></i></label>
                <label for="slider_5" class="numb5"><i class="fa fa-arrow-circle-right"></i></label>
            </div>
            <div class="previous control">
                <label for="slider_1" class="numb1"><i class="fa fa-arrow-circle-left"></i></label>
                <label for="slider_2" class="numb2"><i class="fa fa-arrow-circle-left"></i></label>
                <label for="slider_3" class="numb3"><i class="fa fa-arrow-circle-left"></i></label>
                <label for="slider_4" class="numb4"><i class="fa fa-arrow-circle-left"></i></label>
                <label for="slider_5" class="numb5"><i class="fa fa-arrow-circle-left"></i></label>
            </div>

            <div class="cust">
                <button   onclick="location.href='#Customize'" class="btn-circle btn-lg" ><i class="fas fa-cog"></i></button>
                <div id="Customize" class="overlay">
                    <div class="popup">
                        <a class="close" href="#">&times;</a>
                        <div class="content">
                            <iframe width="100%" height="100%" src="https://juliushussl.000webhostapp.com/graph2.php" frameborder="0" scrolling="yes"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div class="slider slide1">
                <div>
                    <div class="header"><h2><i class="fa fa-map-marker"></i> Carnuntum<p>Atrium</p></h2></div>
                    <?php
                    $servername = "localhost";
                    $database = "id4216250_raummessungen";
                    $username = "id4216250_juliushussl";
                    $password = "RaumKlima";
                    $table = "Carnuntum";
                    // Create connection

                    // Create connection
                    $conn = new mysqli($servername, $username, $password, $database);
                    // Check connection
                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                    } 
                    try{
                        $sql = "SELECT Temperatur, Luftfeuchtigkeit, Luftdruck, Licht, Zeit FROM ".$table." WHERE id=(SELECT MAX(id) FROM ".$table.")";
                        $result = $conn->query($sql);
                        while ($row = mysqli_fetch_assoc($result)) {
                            $Temperatur = (int)$row['Temperatur'];
                            $Luftfeuchtigkeit = (int)$row['Luftfeuchtigkeit'];
                            $Luftdruck = floor (($row['Luftdruck']/1000)*100) / 100;
                            $Licht = (int)$row['Licht'];
                            $Zeit = $row['Zeit'];

                            $timestamp = strtotime($Zeit) + 60*60;
                            $Zeit = date('H:i', $timestamp);
                        }
                        echo "<h1>".$Temperatur."°</h1><h2>".$Luftfeuchtigkeit."<div class=\"Einheit\">%</div></h2><br><h2>".$Luftdruck."<div class=\"Einheit\">Bar</div></h2><br><h2>".$Licht."<div class=\"Einheit\">Lux</div></h2><br><h2><div class=\"Zeit\">Letzte Messung: </div><br><br><br><br>".$Zeit."</h2>";
                    }catch(Error $e) {
                        $trace = $e->getTrace();
                        echo $e->getMessage().' in '.$e->getFile().' on line '.$e->getLine().' called from '.$trace[0]['file'].' on line '.$trace[0]['line'];
                    }
                    $conn->close();
                    ?>  
                    <!--             <h1>23°</h1> 
<h2>20<div class="Einheit">%</div></h2>
<br><h2>1<div class="Einheit">Bar</div></h2>
<br><h2>3<div class="Einheit">Lux</div></h2>
<br><h2><div class="Zeit">Letzte Messung: </div><br><br><br><br>16:53</h2> !-->

                    <button  onclick="location.href='#Carnuntum'" class="btn btn-1 btn-1e" >Show Graph</button>             
                    <div id="Carnuntum" class="overlay">
                        <div class="popup">
                            <a class="close" href="#">&times;</a>
                            <div class="content">
                                <iframe width="100%" height="100%" src="https://juliushussl.000webhostapp.com/graph.php?table=Carnuntum" frameborder="0" scrolling="yes"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slider slide2">
                <div>
                    <div class="header"><h2><i class="fa fa-map-marker"></i> Erik<p>Neubau</p></h2></div>
                    <?php
                    $servername = "localhost";
                    $database = "id4216250_raummessungen";
                    $username = "id4216250_juliushussl";
                    $password = "RaumKlima";
                    $table = "neubau";
                    // Create connection

                    // Create connection
                    $conn = new mysqli($servername, $username, $password, $database);
                    // Check connection
                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                    } 
                    try{
                        $sql = "SELECT Temperatur, Luftfeuchtigkeit, Luftdruck, Licht, Zeit FROM ".$table." WHERE id=(SELECT MAX(id) FROM ".$table.")";
                        $result = $conn->query($sql);
                        while ($row = mysqli_fetch_assoc($result)) {
                            $Temperatur = (int)$row['Temperatur'];
                            $Luftfeuchtigkeit = (int)$row['Luftfeuchtigkeit'];
                            $Luftdruck = floor (($row['Luftdruck']/1000)*100) / 100;
                            $Licht = (int)$row['Licht'];
                            $Zeit = $row['Zeit'];

                            $timestamp = strtotime($Zeit) + 60*60;
                            $Zeit = date('H:i', $timestamp);
                        }
                        echo "<h1>".$Temperatur."°</h1><h2>".$Luftfeuchtigkeit."<div class=\"Einheit\">%</div></h2><br><h2>".$Luftdruck."<div class=\"Einheit\">Bar</div></h2><br><h2>".$Licht."<div class=\"Einheit\">Lux</div></h2><br><h2><div class=\"Zeit\">Letzte Messung: </div><br><br><br><br>".$Zeit."</h2>";
                    }catch(Error $e) {
                        $trace = $e->getTrace();
                        echo $e->getMessage().' in '.$e->getFile().' on line '.$e->getLine().' called from '.$trace[0]['file'].' on line '.$trace[0]['line'];
                    }
                    $conn->close();
                    ?>  
                    <!--             <h1>23°</h1> 
<h2>20<div class="Einheit">%</div></h2>
<br><h2>1<div class="Einheit">Bar</div></h2>
<br><h2>3<div class="Einheit">Lux</div></h2>
<br><h2><div class="Zeit">Letzte Messung: </div><br><br><br><br>16:53</h2> !-->

                    <button  onclick="location.href='#PhysikSaal'" class="btn btn-1 btn-1e" >Show Graph</button>             
                    <div id="PhysikSaal" class="overlay">
                        <div class="popup">
                            <a class="close" href="#">&times;</a>
                            <div class="content">
                                <iframe width="100%" height="100%" src="https://juliushussl.000webhostapp.com/graph.php?table=neubau" frameborder="0" scrolling="yes"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slider slide3">
                <div>
                    <div class="header"><h2><i class="fa fa-map-marker"></i> Julius<p>Altbau</p></h2></div>
                    <?php
                    $servername = "localhost";
                    $database = "id4216250_raummessungen";
                    $username = "id4216250_juliushussl";
                    $password = "RaumKlima";
                    $table = "altbau";
                    // Create connection

                    // Create connection
                    $conn = new mysqli($servername, $username, $password, $database);
                    // Check connection
                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                    } 
                    try{
                        $sql = "SELECT Temperatur, Luftfeuchtigkeit, Luftdruck, Licht, Zeit FROM ".$table." WHERE id=(SELECT MAX(id) FROM ".$table.")";
                        $result = $conn->query($sql);
                        while ($row = mysqli_fetch_assoc($result)) {
                            $Temperatur = (int) $row['Temperatur'];
                            $Luftfeuchtigkeit = (int) $row['Luftfeuchtigkeit'];
                            $Luftdruck = floor (($row['Luftdruck']/1000)*100) / 100;
                            $Licht = (int) $row['Licht'];
                            $Zeit = $row['Zeit'];

                            $timestamp = strtotime($Zeit) + 60*60;
                            $Zeit = date('H:i', $timestamp);

                        }
                        echo "<h1>".$Temperatur."°</h1><h2>".$Luftfeuchtigkeit."<div class=\"Einheit\">%</div></h2><br><h2>".$Luftdruck."<div class=\"Einheit\">Bar</div></h2><br><h2>".$Licht."<div class=\"Einheit\">Lux</div></h2><br><h2><div class=\"Zeit\">Letzte Messung: </div><br><br><br><br>".$Zeit."</h2>";
                    }catch(Error $e) {
                        $trace = $e->getTrace();
                        echo $e->getMessage().' in '.$e->getFile().' on line '.$e->getLine().' called from '.$trace[0]['file'].' on line '.$trace[0]['line'];
                    }
                    $conn->close();
                    ?>  
                    <button  onclick="location.href='#mathelab'" class="btn btn-1 btn-1e" >Show Graph</button>             
                    <div id="mathelab" class="overlay">
                        <div class="popup">
                            <a class="close" href="#">&times;</a>
                            <div class="content">
                                <iframe width="100%" height="100%" src="https://juliushussl.000webhostapp.com/graph.php?table=altbau" frameborder="0" scrolling="yes"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="slider slide4">
                <div>
                    <div class="header"><h2><i class="fa fa-map-marker"></i> Jannik<p>Betonkerntemperierung</p></h2></div>
                    <?php
                    $servername = "localhost";
                    $database = "id4216250_raummessungen";
                    $username = "id4216250_juliushussl";
                    $password = "RaumKlima";
                    $table = "betonkerntemperierung";
                    // Create connection

                    // Create connection
                    $conn = new mysqli($servername, $username, $password, $database);
                    // Check connection
                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                    } 
                    try{
                        $sql = "SELECT Temperatur, Luftfeuchtigkeit, Luftdruck, Licht, Zeit FROM ".$table." WHERE id=(SELECT MAX(id) FROM ".$table.")";
                        $result = $conn->query($sql);
                        while ($row = mysqli_fetch_assoc($result)) {
                            $Temperatur = (int) $row['Temperatur'];
                            $Luftfeuchtigkeit = (int) $row['Luftfeuchtigkeit'];
                            $Luftdruck = floor (($row['Luftdruck']/1000)*100) / 100;
                            $Licht = (int) $row['Licht'];
                            $Zeit = $row['Zeit'];

                            $timestamp = strtotime($Zeit) + 60*60;
                            $Zeit = date('H:i', $timestamp);

                        }
                        echo "<h1>".$Temperatur."°</h1><h2>".$Luftfeuchtigkeit."<div class=\"Einheit\">%</div></h2><br><h2>".$Luftdruck."<div class=\"Einheit\">Bar</div></h2><br><h2>".$Licht."<div class=\"Einheit\">Lux</div></h2><br><h2><div class=\"Zeit\">Letzte Messung: </div><br><br><br><br>".$Zeit."</h2>";
                    }catch(Error $e) {
                        $trace = $e->getTrace();
                        echo $e->getMessage().' in '.$e->getFile().' on line '.$e->getLine().' called from '.$trace[0]['file'].' on line '.$trace[0]['line'];
                    }
                    $conn->close();
                    ?> 
                    <button  onclick="location.href='#Betonk'" class="btn btn-1 btn-1e" >Show Graph</button>             
                    <div id="Betonk" class="overlay">
                        <div class="popup">
                            <a class="close" href="#">&times;</a>
                            <div class="content">
                                <iframe width="100%" height="100%" src="https://juliushussl.000webhostapp.com/graph.php?table=betonkerntemperierung" frameborder="0" scrolling="yes"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="slider slide5">
                <div>
                    <div class="header" style="margin: 50px;"><h2>Projekt Raumklima<p>Julius Hussl, Jannik Horner, Erik Demol, Ying Mei, Benedikt Wolfgang &amp; Aldar Mandzhiev</p></h2></div>
                </div>
            </div>
        </div>
    </body>
</html>

