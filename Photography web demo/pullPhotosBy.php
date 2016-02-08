<?php
    function pullPhotosBy($column) {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "zmdb";

        try {
            $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $sql = "SELECT * FROM photo";
            $result = $conn->query($sql);
            $row = $result->fetchAll();
            $array = array();
            
            for ($i = 0; $i < count($row); $i++) {
                if ($column == 'photoID') {
                    array_push($array, $row[$i][0]); 
                } else if ($column == 'title') {
                    array_push($array, $row[$i][1]);
                } else if ($column == 'description') {
                    array_push($array, $row[$i][2]);
                } else if ($column == 'artist') {
                    array_push($array, $row[$i][3]);
                } else if ($column == 'date_taken') {
                    array_push($array, $row[$i][4]);
                } else if ($column == 'file_name') {
                    array_push($array, $row[$i][5]);
                } else {
                    array_push($array, $row[$i][6]);
                }
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