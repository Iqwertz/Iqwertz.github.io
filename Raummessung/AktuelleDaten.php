<?php
$servername = "localhost";
$database = "id4216250_raummessungen";
$username = "id4216250_juliushussl";
$password = $_GET["pw"];
// Create connection

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
try{
    $sql = "SELECT Temperatur, Luftfeuchtigkeit, Luftdruck, Licht, date_format(Zeit, '%H:%i') FROM messung WHERE id=(SELECT MAX(id) FROM messung)";
    $result = $conn->query($sql);
    while ($row = mysqli_fetch_assoc($result)) {
        $Temperatur = $row['Temperatur'];
        $Luftfeuchtigkeit = $row['Luftfeuchtigkeit'];
        $Luftdruck = $row['Luftdruck'];
        $Licht = $row['Licht'];
        $Zeit = $row['Zeit'];
    }
    echo "<h1>".$Temperatur."°</h1><h2>".$Luftfeuchtigkeit."<div class=\"Einheit\">%</div></h2><br><h2>".$Luftdruck."<div class=\"Einheit\">Bar</div></h2><br><h2>".$Licht."<div class=\"Einheit\">Lux</div></h2><br><h2><div class=\"Zeit\">Letzte Messung: </div><br><br><br><br>".$Zeit."</h2>";
}catch(Error $e) {
    $trace = $e->getTrace();
    echo $e->getMessage().' in '.$e->getFile().' on line '.$e->getLine().' called from '.$trace[0]['file'].' on line '.$trace[0]['line'];
}
$conn->close();
?>