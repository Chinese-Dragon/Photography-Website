<?php
session_start();

if(isset($_POST['submit']) && $_SERVER["REQUEST_METHOD"] == "POST"){
    
    include 'includes/connect.php';

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
        echo "Incorrect email ";
    } else {

        $validPassword = password_verify ( $passwordAttempt, $user ['password'] );

        if ($validPassword) {
            $_SESSION ['CurrentEmail'] = $email;
            $_SESSION ['CurrentUser'] = $user ['name'];

            header ( 'location:home.php' );
            exit ();
        } else {

            echo "incorrect";
        }
    }

}
$conn = null;
?>