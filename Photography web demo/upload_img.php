<?php
       include 'includes/connect.php';

/* 
 * This script uploads a JPG or PNG image to the uploads folder. It
 * does the following:
 *   - Checks for upload errors
 *   - Limits file upload size to 1.5MB (1024*1024*1.5)
 *   - Limits the file upload to only JPG or PNG as determined by the
 *     File Extension.
 *   - Moves the file to the uploads directory.
 *   - Returns web page indicating the results.
 */
 
 /*
  * Instructions:  This script is an outline of what you need to do to
  * implement the functionality specified above.  You will need to declare
  * other error flags and nest if statements in the main if illustrated
  * below to check each of the conditions. You will also need to modify
  * the if statement in the html code by nesting additional if statements
  * to print the other error conditions as appropriate.
  */

    $uploadError = 0;
    $fileSizeError = 0;

    // TO DO; Add additional error flags as needed
    $fileTypeError=0;
    $fileTmpnameError=0;

    $max_file_size = 1024*1024*1.5;
    
   
   if ($_FILES["file1"]["error"] == UPLOAD_ERR_OK) {
   	  // upload the file 
   	  // check the file size
	  if ($_FILES["file1"]["size"] <= $max_file_size){ 
          //Done checking file size
          //check the file type
          $validExt= array("jpg","png","JPG","PNG");
          $extension= end(explode(".",$_FILES["file1"]["name"]));
          if (in_array($extension, $validExt)){
              //Done checking file type
              //check the upload folder
              $fileToMove=$_FILES["file1"]["tmp_name"];
              $destination="./img/".$_FILES["file1"]["name"];
              if (move_uploaded_file($fileToMove,$destination)){
                    $title = $_POST['title'];
                    $description = $_POST['description'];
                    $artist = $_POST['artist'];
                    $date_taken = $_POST['date_taken'];
                    $file_name = 'img/'.$_FILES['file1']['name'];
                    $category=$_POST['category'];

                    $sql = "INSERT INTO photo (photoID, title, description, artist, date_taken, file_name, category) ".
                    "VALUES ('$title','$title','$description','$artist','$date_taken','$file_name','$category')";
                    $conn -> exec($sql);
                    $conn = null;
                  
                  header ( "location:home.php" );
              }else{
                  //file can not be stored 
                  $fileTmpnameError=1;
              }
              
          }else{
              //File type error occurred- flag it
              $fileTypeError=1;
          }     
      }else{
          //File size error occurred- flag it
          $fileSizeError=1;
      }
   }
   else {
   	  // File upload error occurred - flag it
   	  $uploadError = 1;
   }
?>

<!DOCTYPE html>
<html>
	<head>
		<title>Upload Report</title>
	</head>
	<body>
<?php
   if(!$uploadError && !$fileSizeError && !$fileTypeError && !$fileTmpnameError) {
     echo "<h2>The file was Uploaded and Moved Successfully</h2>";
   }
   else {
   	 if ($uploadError){
   	 	 echo "<h2>Upload Failed</h2>";
   	 }
	 else {
         if ($fileSizeError){
             echo "<h2>File size is too large</h2>";
         }else{
             if ($fileTypeError){
                 echo "<h2>File type can only be PNG or JPG</h2>";
             }else{
                 if ($fileTmpnameError){
                     echo "<h2>There was a problem moving the file</h2>";
                 }
             }
         }
	 }
   }
?>
	</body>
</html>
    