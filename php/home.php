<?php
$servername = "localhost";
$username = "wine-user";
$password = "pinot";
$dbname = "wine";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT id, name as producer FROM producers";
$result = $conn->query($sql);

$resultarr = array();

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
		$temparr = array('producer' => $row["producer"]);
		
		$winesql = "SELECT name as wine FROM wine_names WHERE producer_id =".$row["id"];
		$result2 = $conn->query($winesql);
		
		if ($result2->num_rows > 0) {
			$temparr2 = array();
			while($row2 = $result2->fetch_assoc()) {
				array_push($temparr2,array('wine' => $row2["wine"]));
				
			}
		}
		array_push($temparr,$temparr2);
		array_push($resultarr,$temparr);
    }
}
echo json_encode($resultarr);


		//$temparr = array('wine' => $row["wine"], 'producer' => $row["producer"]);

$conn->close();
?>