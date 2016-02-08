<?php

	session_start();
	
	if(!isset($_SESSION["CurrentEmail"])){
		header('location:index.php');
		exit();
	}
	
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/clean-blog.min.css">
    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="home.css">
    <script type="text/javascript" src="custom_js/checkSize.js"></script>
    <title>Upload Photography</title>
</head>

<body>

	<!-- Navigation -->
    <nav class="navbar navbar-default navbar-custom navbar-fixed-top">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header page-scroll">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>

                </button>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="lst">
                        <a href="index.php">Home</a>
                    </li>
                    
                    <li class="lst">
                    	<?php 
                    	
                    		echo '<a href="home.php">'.$_SESSION["CurrentUser"].'</a>';
                    	?>
                    </li>
                    
                    <li class="lst">
                        <a href="logout.php?logout=1">Logout</a>
                    </li>
                    
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
	
    <div class="container" id="container1">
        <div class="row centered-form">
            <div class="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title text-center">
                        	<?php 
                        		echo 'Hey '.$_SESSION["CurrentUser"];
                        	?>
                        </h3>
                    </div>
                    <div class="panel-body">
                        <form enctype='multipart/form-data' role="form" action="upload_img.php" method="post" id="pictUploadFrm">
                            <div class="form-group" id="first">
                                <input type="text" id="title" name="title" class="form-control" placeholder="Title">
                            </div>

                            <div class="form-group">
                                <span class="btn btn-default btn-file">Select Image
                                <input type="hidden" name="MAX_FILE_SIZE" value="2097152" />
                                <input type="file" name="file1" id="file1"required /> 
                                </span>
                                <label id="sizeError" class="hidden">The file must be less than 1.5 MB</label>
                                
                                <div class="form-group">
                                  <select class="form-control" id="sel1" name="category">
                                    <option selected>Select Category</option>
                                    <option value="landscape">landscape</option>
                                    <option value="animal">animal</option>
                                    <option value="car">car</option>
                                  </select>
                                </div>
                            </div>


                            <div class="form-group">
                                <textarea id="description" name="description" class="form-control" placeholder="Describe the Image" required></textarea>
                            </div>
                            
                            <div class="form-group" id="first">
                                <input type="text" id="artist" name="artist" class="form-control" placeholder="Artist name" required>
                            </div>
                            
                            <div class="form-group" id="first">
                                <input type="date" id="artist" name="date_taken" class="form-control" required>
                            </div>   

                            <input type="submit" value="Upload" class="btn btn-info btn-block">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

    

</body>

</html>