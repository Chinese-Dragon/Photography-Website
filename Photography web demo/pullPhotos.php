<?php
    include "pullPhoto.php";

    function pullPhotos($column) {
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
            
            for ($i = 0; $i < count($row); $i++) {
                if ($column == 'photoID') {
                    print_r($row[$i][0]);
                } else if ($column == 'title') {
                    print_r($row[$i][1]);
                } else if ($column == 'description') {
                    print_r($row[$i][2]);
                } else if ($column == 'artist') {
                    print_r($row[$i][3]);
                } else if ($column == 'date_taken') {
                    print_r($row[$i][4]);
                } else if ($column == 'file_name') {
                    print_r($row[$i][5]);
                } else {
                    print_r($row[$i][6]);
                }
            }
        }
        catch(PDOException $e) {
            global $sql;
            echo $sql . "<br>" . $e->getMessage();
        }
        $conn = null;
    }
?>