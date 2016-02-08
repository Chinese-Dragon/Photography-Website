<?php
require_once("includes/connect.php");

$email = $_POST ['inputEmail'];

if(!empty($email)) {
    
    $stmt = $conn->prepare ( "SELECT email FROM users WHERE email= :email " );
    $stmt->bindParam ( ':email', $email );
    $stmt->execute ();
    
  if($stmt->rowCount ()>0) {
      echo "<span class='status-not-available'> Email address Not Available.</span>";
  }else{
      echo "<span class='status-available'> Email address Available.</span>";
  }
}

$conn=null;

?>