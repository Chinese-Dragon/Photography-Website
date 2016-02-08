<?php
    require_once("includes/connect.php");

    $email = $_POST ['inputEmail'];
    $passwordAttempt = $_POST ['inputPassword'];

    // Retrieve the user account information for the given user email
    $sql = "SELECT name, password FROM users WHERE email=:email";
    $stmt = $conn->prepare ( $sql );

    // Bind Value
    $stmt->bindValue ( ':email', $email );

    // Execute
    $stmt->execute ();

    // Fetch row
    $user = $stmt->fetch ( PDO::FETCH_ASSOC );
    
  
    if ($user === false) {
            echo "<span class='login-not-available'>Incorrect password or email address</span>";
    } else {
        
            $validPassword = password_verify ( $passwordAttempt, $user ['password'] );

            if (!$validPassword) {
                echo "<span class='login-not-available'>Incorrect password or email address</span>";
            }
    }

    $conn=null;

?>