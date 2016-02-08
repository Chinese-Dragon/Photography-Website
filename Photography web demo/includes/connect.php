<?php
    $dbserver = "localhost";
	$dbuser = "root";
	$dbpass = "";
	$db = "zmdb";
	
	
	try {
		
		$conn = new PDO("mysql:host=$dbserver;dbname=$db",$dbuser,$dbpass);
		
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        

	} catch (Exception $e) {
		echo "Connection failed: ".$e->getMessage();
	}
?>