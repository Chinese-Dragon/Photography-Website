<?php
include "pullPhotoFromCategory.php";
                    $data = pullPhotoFromCategory('landscape');
            
                    for($i = 0; $i < count($data); $i++) {
                        echo '<img id=' . 'l' . '"' . $i . '" ' . 'src=' . "'" . $data[$i] . "'" . 'height="100" width="150">';
                    }
                ?>