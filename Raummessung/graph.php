<html>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <head>
         <script type="text/javascript" src="libraries/dygraph-combined.js"></script>
        <link rel="stylesheet" src="CSS/dygraph.css" />
        <style>
            table{
                margin:0px auto; 
                width:90%; 
                height:90%;
                vertical-align: middle;
            }
        </style>
    </head>
    <body style="color: rgb(0, 0, 0);background-color: rgb(20, 20, 20)" alink="#ee0000" link="#0000ee" vlink="#551a8b">
        <div style="text-align: center;"><span style="color: rgb(255, 255, 255);"><br></span>
            <table border="0" align="center">
                <tr>
                    <td style="background-color: #FFFFFF">
                        <div id="func" style="width:100%; height:100%; "></div>
                        <script type="text/javascript">

                            g2 = new Dygraph(document.getElementById("func"),
                                             <?php
                                             $mysql_host = "localhost";
                                             $mysql_db = "id4216250_raummessungen";
                                             $mysql_user = "id4216250_juliushussl";
                                             $mysql_pw = "RaumKlima";
                                             $table = $_GET["table"];
                                             //    $connection = mysql_connect($mysql_host, $mysql_user, $mysql_pw) or die("Verbindung zur Datenbank fehlgeschlagen.");
                                             $connection = new mysqli($mysql_host, $mysql_user, $mysql_pw, $mysql_db);   // Check connection
                                             if ($connection->connect_error) {
                                                 die("Connection failed: " . $connection->connect_error);
                                             } 
                                             $abfrage = "SELECT DATE_FORMAT(Zeit, '%Y/%m/%d %H:%i:%s') AS date, Temperatur, Luftfeuchtigkeit, Luftdruck, Licht FROM ".$table;       //   2009/07/12 12:34:56
                                             $ergebnis = mysqli_query($connection,$abfrage);

                                             echo "[";                                  // start of the 2 dimensional array
                                             while($row = mysqli_fetch_array($ergebnis))
                                             {
                                                 $utime = strtotime($row[datum]);
                                                 $diffutime = $utime - $lastutime;
                                                 if ($diffutime > 600) {
                                                     echo "["."new Date(\"".$row[date]."\")".",NaN,NaN],";
                                                 }
                                                 else {
                                                     echo "["."new Date(\"".$row[date]."\")".",".$row[Temperatur].",".($row['Luftdruck']/1000).",".$row[Luftfeuchtigkeit].",".$row[Licht]."],";
                                                 }
                                                 $lastutime = strtotime($row[datum]);
                                             }
                                             echo "]";
                                             mysqli_close($connection);
                                             ?>,{ 
                                            showRoller: true,
                                             connectSeparatedPoints: true,
                                             animatedZooms: true,
                                             strokeWidth:2,
                                             labels: [ 'Zeit', 'Temperatur', 'Luftdruck','Luftfeuchtigkeit', 'Licht']
                                             });
                        </script>
                    </td>
                </tr>
            </table>
        </div>
    </body>
</html>