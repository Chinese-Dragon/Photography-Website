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
                        <div class="btn-group">
                            <a class="btn dropdown-toggle" type="button" data-toggle="dropdown">Category<span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="#" id="landscape">Landscape</a></li>
                                <li><a href="#" id="animal">Animal</a></li>
                                <li><a href="#" id="car">Car</a></li>
                            </ul>
                        </div>
                    </li>
                    <?php 
                        if(!isset($_SESSION["CurrentEmail"])){
                            echo '<li class="lst">
                                    <a class="btn" id="login" data-toggle="modal" data-target="#modal-login">Log in</a>
                                  </li>';
	                    }else{
                            echo 
                            '<li class="lst">
                                <a href="home.php">'.$_SESSION["CurrentUser"].'</a>
                            </li>

                            <li class="lst">
                                <a href="logout.php?logout=1">Logout</a>
                            </li>';

                        }
                     
                    ?>
                   
                    
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>