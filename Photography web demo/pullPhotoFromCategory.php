<?php
    function pullPhotoFromCategory($category) {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "zmdb";

        try {
            $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "SELECT file_name FROM photo WHERE category="."'".$category."'";
            $result = $conn->query($sql);
            $row = $result->fetchAll();
            $array = array();
            
            for ($i = 0; $i < count($row); $i++) {
                array_push($array, $row[$i][0]); 
            }
            
            return $array;
            
        }
        catch(PDOException $e) {
            global $sql;
            echo $sql . "<br>" . $e->getMessage();
        }
        $conn = null;
    }
?>