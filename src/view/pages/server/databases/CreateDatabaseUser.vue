<template>
    <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4>Add New Database User</h4>
                <p>If you have changed your <strong>root</strong> database password,
                    please update your new password inside <code>/etc/mysql/my.cnf</code> or adding new user won't work.
                </p>
            </div>
            <div class="panel-body">
                <div>
                    <form>
                        <div class="form-group"><label for="username" class="control-label">Username
                            </label>
                            <input type="text" name="username" placeholder="Only alphanumeric and/or _ are allowed"
                                class="form-control input-lg">

                        </div>
                        <div class="form-group"><label for="password" class="control-label">Password
                            </label>

                            <div class="input-group"><input type="password" name="password" placeholder=""
                                    class="form-control input-lg"> <span class="input-group-btn"><button type="button"
                                        class="btn input-lg btn-success"><span><span
                                                class="rc rc-line-lock"></span></span></button></span></div>

                        </div>
                        <div class="form-group"><label for="password_confirmation" class="control-label">Verify Password
                            </label>
                            <input type="password" name="password_confirmation" placeholder=""
                                class="form-control input-lg">

                        </div> 
                        <button type="submit" class="btn btn-base btn-block"><span><span>
                                    Add user
                                </span></span></button>
                    </form>
                   
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped src="@/assets/styles/server.css"></style>

<script>
    export default {
        data() {
            return {
                
            };
        },
    };
</script>