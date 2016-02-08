<?php
    
    function pullPhoto($photoID) {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "zmdb";

        try {
       $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
   $sql = "SELECT file_name FROM photo WHERE photoID="."'".$photoID."'";
            $result = $conn->query($sql);
        
            $row = $result->fetch();
            echo $row['file_name'];
   }
   catch(PDOException $e) {
            global $sql;
       echo $sql . "<br>" . $e->getMessage();
   }
   $conn = null;
    }
?>