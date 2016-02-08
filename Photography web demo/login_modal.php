
    <!-- Modal_Login -->
    <div class="modal fade" id="modal-login" role="dialog" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header" style="padding:35px 50px;">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4><span class="glyphicon glyphicon-lock"></span>Login</h4>
                </div>
                <div class="modal-body" style="padding:40px 50px;">
                    <form name="login" id="form_login"action="login.php" role="form" method="post" data-toggle="validator">
                        <div class="form-group">
                            <label for="email"><span class="glyphicon glyphicon-user label-control"></span> Email</label>
                            <input type="email" name="inputEmail" class="form-control" id="loginEmail" placeholder="Enter email" required>
                        </div>
                        <div class="form-group">
                            <label for="password" class="control-label"><span class="glyphicon glyphicon-eye-open label-control"></span> Password</label>
                            <input type="password" name="inputPassword" class="form-control" id="loginPassword" placeholder="Enter password" minlength="6" onBlur="checkLogin()"  required><span id="login-availability-status"></span>
                            

                        </div>
                        <div class="checkbox">
                            <label>
                                <input type="checkbox" value="" data-error="Before you wreck yourself">Remember me</label>
                            <div class="help-block with-errors"></div>
                        </div>
                        <button name="submit" type="submit" class="btn btn-block" id="login"><span class="glyphicon glyphicon-off"></span> Login</button>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="submit" name="submit" id="cancel" class="btn btn-danger pull-left" data-dismiss="modal"><span class="glyphicon glyphicon-remove"></span> Cancel</button>
                    <p>Not a <a href="#" id="join-trigger">member?</a></p>
                    <p>Forgot <a href="#" id="forgot-trigger">Password?</a></p>
                </div>
            </div>
        </div>
    </div>
    <hr>
