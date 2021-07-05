<template>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4>Add New Web Application</h4>
                <p >Please choose which action that you would like to perform.</p>
            </div>
            <div class="panel-body">
                <div  class="webapp-type-selection d-flex align-items-center">
                    <div  class="item align-self-stretch">
                        <b-link to="create/custom">
                            <label 
                                class="btn btn-block btn-checkbox d-flex">
                                <i  class="rc rc-php"></i>
                                <div >
                                    <h5  class="font-weight-black">Custom Web Application</h5>
                                    <p  >Works for every PHP system.
                                        Craft your own web application.</p>
                                </div>
                            </label>
                        </b-link>
                    </div>
                    <div  class="item align-self-stretch">
                        <b-link to="create/wordpress">
                            <label 
                                class="btn btn-block btn-checkbox d-flex"><i 
                                    class="rc rc-wordpress"></i>
                                <div >
                                    <h5  class="font-weight-black">1 Click WordPress</h5>
                                    <p  >Tailored for WordPress
                                        enthusiasts. Install with one click.</p>
                                </div>
                            </label>
                        </b-link>       
                    </div>
                    <div  class="item align-self-stretch">
                        <b-link to="create/phpmyadmin">
                            <label 
                                class="btn btn-block btn-checkbox d-flex"><i 
                                    class="rc rc-br-phpmyadmin"></i>
                                <div >
                                    <h5  class="font-weight-black">1 Click PHPMyAdmin</h5>
                                    <p  >Install latest phpMyAdmin to
                                        manage your databases.</p>
                                </div>
                            </label>
                        </b-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped src="@/assets/styles/app.css"></style>
<style scoped src="@/assets/styles/server.css"></style>
