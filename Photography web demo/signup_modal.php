<!--Modal_Signup-->
    <div class="modal fade" id="modal-join" role="dialog" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header" style="padding:35px 50px;">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4><span class="glyphicon glyphicon-lock"></span>Signup</h4>
                </div>
                <div class="modal-body" style="padding:40px 50px;">
                    <form action="register.php" name="signup" id="form_signup" role="form" method="post" data-toggle="validator">
                        <div class="form-group">
                            <label for="name"><span class="glyphicon glyphicon-user label-control"></span> Name</label>
                            <input type="text" name="inputName" class="form-control" id="name" placeholder="Name" required>
                        </div>

                        <div class="form-group">
                            <label for="email"><span class="glyphicon glyphicon-envelope label-control"></span> Email</label>
                            <input type="email" name="inputEmail" class="form-control" id="signupemail" placeholder="Enter email" onBlur="checkAvailability()" required><span id="user-availability-status"></span>
                            
                        </div>
                        <div class="form-group">
                            <label for="password" class="control-label"><span class="glyphicon glyphicon-eye-open label-control"></span> Password</label>
                            <input type="password" name="inputPassword" class="form-control" id="password" placeholder="Enter password" minlength="6" required>
                            <div class="pwstrength_viewport_progress"></div>
                        </div>

                        <button type="submit" name="submit" class="btn btn-block" id="signup"><span class="glyphicon glyphicon-off"></span> Signup</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-default pull-left" id="cancel" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span> Cancel</button>
                </div>
            </div>

        </div>
    </div>