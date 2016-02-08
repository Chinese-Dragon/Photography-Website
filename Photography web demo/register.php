<?php
include 'includes/connect.php';

$name = $_POST ['inputName'];
$email = $_POST ['inputEmail'];
$password = $_POST ['inputPassword'];

$stmt = $conn->prepare ( "SELECT email FROM users WHERE email= :email " );
$stmt->bindParam ( ':email', $email );
$stmt->execute ();

if ($stmt->rowCount () > 0) {
	trigger_error ( 'It exists.', E_USER_WARNING );
} else {
	// Hash the password as we do NOT want to store our password in plain text
	$passwordHash = password_hash ( $password, PASSWORD_DEFAULT );
	
	// prepare out INSERT statement
	$sql = "INSERT INTO users(name,email,password)
	VALUES(:name,:email,:password)";
	$stmt = $conn->prepare ( $sql );
	
	// Bind our variables
	$stmt->bindValue ( ':name', $name );
	$stmt->bindValue ( ':email', $email );
	$stmt->bindValue ( ':password', $passwordHash );
	
	// Execute the statement and insert the new user
	$result = $stmt->execute ();
	
	if ($result) {
		header ( "location:index.php" );
	} else {
		
		echo "something wrong";
	}
}

$conn = null;
?>