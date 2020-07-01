<?php
// Reset Id: TRUNCATE TABLE table_name;
$servername = "localhost";
$database = "id4216250_raummessungen";
$username = "id4216250_juliushussl";
$password = $_GET["passwort"];  //"RaumKlima"

$temp = $_GET["Temperatur"];
$feucht = $_GET["Luftfeuchtigkeit"];
$druck = $_GET["Luftdruck"];
$licht = $_GET["Licht"];
$table = $_GET["Table"];
// Create connection
$conn = new mysqli($servername, $username, $password, $database);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO ".$table." (Temperatur, Luftfeuchtigkeit, Luftdruck, Licht)
VALUES ($temp,$feucht,$druck,$licht)";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


$sql = "SELECT * FROM ".$table;
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " " . $row["Zeit"]. " " . $row["Temperatur"]. " " . $row["Luftfeuchtigkeit"]. " " . $row["Luftdruck"]. " " . $row["Licht"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>