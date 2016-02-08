<?php
    
    function pullCredit($photoID) {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "zmdb";

        try {
       $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
   $sql = "SELECT artist FROM photo WHERE file_name="."'".$photoID."'";
            $result = $conn->query($sql);
        
            $row = $result->fetch();
            return $row['artist'];
   }
   catch(PDOException $e) {
            global $sql;
       echo $sql . "<br>" . $e->getMessage();
   }
   $conn = null;
    }
?>