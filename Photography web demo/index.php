<?php
    session_start();

    include "pullPhoto.php";
    include "pullCredit.php";
    include "pullPhotosBy.php";
    include "pullPhotoFromCategory.php";

?>

    <!DOCTYPE html>
    <html lang="en">

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">


        <!-- jQuery -->
        <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>

        <!--AJAX-->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>


        <!--Values to be accessed using AJAX-->
            <span id="autobahn" style="display:none;"><?php pullPhoto('autobahn'); ?></span>
            <span id="anglerFish" style="display:none;"><?php pullPhoto('anglerFish'); ?></span>
            <span id="elCamino" style="display:none;"><?php pullPhoto('elCamino'); ?></span>
            <span id="autobahnCredit" style="display:none;">&copy; <?php echo pullCredit('img/landscapes/autobahn.jpg'); ?></span>
            <span id="anglerFishCredit" style="display:none;">&copy; <?php echo pullCredit('img/animals/anglerFish.jpg'); ?></span>
            <span id="elCaminoCredit" style="display:none;">&copy; <?php echo pullCredit('img/cars/elCamino.jpg'); ?></span>
        
        <title>Mark Zach Beautiful</title>

        <!-- Bootstrap Core CSS -->
        <link href="css/bootstrap.css" rel="stylesheet">

        <!-- Custom CSS -->
        <link href="css/clean-blog.min.css" rel="stylesheet">

        <!-- Custom Fonts -->
        <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
        <link href='http://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>

        <link href="custom_css/MZ.css" rel="stylesheet" type="text/css">

        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

        <script>
            function checkAvailability() {
                //$("#loaderIcon").show();
                jQuery.ajax({
                    url: "check_availability.php",
                    data: {
                        inputEmail: $("#signupemail").val()
                    },
                    type: "POST",
                    success: function (data) {
                        $("#user-availability-status").html(data);
                        //$("#loaderIcon").hide();
                    },
                    error: function () {}
                });
            }

            function checkLogin() {
                //$("#loaderIcon").show();
                jQuery.ajax({
                    url: "check_login.php",
                    data: {
                        inputEmail: $("#loginEmail").val(),
                        inputPassword: $("#loginPassword").val()
                    },
                    type: "POST",
                    success: function (data) {
                        $("#login-availability-status").html(data);
                        //$("#loaderIcon").hide();
                    },
                    error: function () {}
                });
            }

            function reset_login() {
                document.getElementById("form_login").reset();
            }

            function reset_signup() {
                document.getElementById("form_signup").reset();
            }

            $(document).ready(function () {
                $('form[name="signup"]').submit(function (event) {
                    if ($('span').hasClass('status-not-available')) {
                        event.preventDefault();
                        reset_signup();
                    }
                });

                $('form[name="login"]').submit(function (event) {
                    if ($('span').hasClass('login-not-available')) {
                        event.preventDefault();
                        reset_login();


                    }
                });
            });

            $(document).ready(function () {
                $('#modal-login').on('hidden.bs.modal', function () {
                    $(this).find("input,textarea,select").val('').end();

                });

                $('#modal-join').on('hidden.bs.modal', function () {
                    $(this).find("input,textarea,select").val('').end();

                });

            });
            
            $('.dropdown-menu').click(function(event){
                event.stopPropagation();
            });
            
            $(document).on('click',function(){
                $('.collapse').collapse('hide');
            });
        </script>


    </head>

    <body>
        <?php include'includes/nava.php';?>

            <!-- Page Header -->
            <!-- Set your background image for this header on the line below. -->
            <header class="intro-header" style="background-image: url('img/jb.jpg')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <div class="site-heading">
                                <h1>Mark</h1>
                                <h1>Zach</h1>
                                <h1>Beautiful</h1>
                                <hr class="small">
                                <span class="subheading">A Journey into the Beauty of the Captured
							Moment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div class="credit">&copy; hdwallpapers.cat</div>
            
            <!--Related Photos-->
            <div class="landscape-thumbs" style="display:none;">
                <h4>Related Photos</h4>
                <?php
                    $data = pullPhotoFromCategory('landscape');
            
                    for($i = 0; $i < count($data); $i++) {
                        echo '<img id=' . '"' . 'l' . $i . '"' . 'src=' . "'" . $data[$i] . "'" . 'height="100" width="150">';
                    }
                ?>
            </div>
            
            <div class="animal-thumbs" style="display:none;">   
                <h4>Related Photos</h4>
                <?php
                    $data = pullPhotoFromCategory('animal');
            
                    for($i = 0; $i < count($data); $i++) {
                        echo '<img id=' . '"' . 'a' . $i . '"' . 'src=' . "'" . $data[$i] . "'" . 'height="100" width="150">';
                    }
                ?>
            </div>    
                
            <div class="car-thumbs" style="display:none;">    
                <h4>Related Photos</h4>
                <?php
                    $data = pullPhotoFromCategory('car');
            
                    for($i = 0; $i < count($data); $i++) {
                        echo '<img id=' . '"' . 'c' . $i . '"' . 'src=' . "'" . $data[$i] . "'" . 'height="100" width="150">';
                    }
                ?>
            </div>
            
            <!--Credits-->
            <?php
                $landNum = pullPhotoFromCategory('landscape');
                $animalNum = pullPhotoFromCategory('animal');
                $carNum = pullPhotoFromCategory('car');

                $landCreditArray = array();
                $animalCreditArray = array();
                $carCreditArray = array();

                for($i = 0; $i < count($landNum); $i++) {
                    array_push($landCreditArray, pullCredit($landNum[$i]));
                }

                for($i = 0; $i < count($animalNum); $i++) {
                    array_push($animalCreditArray, pullCredit($animalNum[$i]));
                }

                for($i = 0; $i < count($carNum); $i++) {
                    array_push($carCreditArray, pullCredit($carNum[$i]));
                }
                
                for($i = 0; $i < count($landNum); $i++) {
                    echo '<span id=' . '"' . 'lt' . $i . '"' . 'style="display:none;">' . '&copy' . $landCreditArray[$i] . '</span>';
                }

                for($i = 0; $i < count($animalNum); $i++) {
                    echo '<span id=' . '"' . 'at' . $i . '"' . 'style="display:none;">' . '&copy' . $animalCreditArray[$i] . '</span>';
                }

                for($i = 0; $i < count($carNum); $i++) {
                    echo '<span id=' . '"' . 'ct' . $i . '"' . 'style="display:none;">' . '&copy' . $carCreditArray[$i] . '</span>';
                }
            ?>

            <!-- Main Content -->

            <!--modal file-->
            <?php include'login_modal.php';?>
                <?php include'signup_modal.php';?>

                    <!--footer-->
                    <?php include'includes/footer.php';?>

                        <!-- Bootstrap Core JavaScript -->
                        <script src="js/bootstrap.js"></script>

                        <script src="custom_js/modal.js"></script>

                        <script src="custom_js/password.js"></script>

                        <!--javascript-->
                        <script src="navigationJS.js"></script>


    </body>

    </html>