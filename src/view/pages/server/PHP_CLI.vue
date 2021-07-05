<template>
    <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4>PHP-CLI Version</h4>
                <p >Your RunCloud server is equipped with multiple PHP Versions for multiple
                    types of Web Applications in order to want to run PHP-CLI with different versions. If you use Composer,
                    it will run using the PHP-CLI version you have chosen.</p>
            </div>
            <div class="panel-body">
                <form>
                    <div class="form-group"><label class="control-label">PHP Version</label>
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <label
                                    class="btn btn-block btn-checkbox"
                                    :class="phpversion=='php72rc'&&'active'">
                                    <input type="radio" name="phpVersion" v-model="phpversion" value="php72rc">
                                    <p >PHP 7.2</p>
                                </label></div>
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <label 
                                    class="btn btn-block btn-checkbox"
                                    :class="phpversion=='php73rc'&&'active'">
                                    <input type="radio" name="phpVersion" v-model="phpversion" value="php73rc">
                                    <p >PHP 7.3</p>
                                </label></div>
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <label 
                                    class="btn btn-block btn-checkbox"
                                    :class="phpversion=='php74rc'&&'active'">
                                    <input type="radio" name="phpVersion" v-model="phpversion" value="php74rc">
                                    <p >PHP 7.4</p>
                                </label></div>
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                <label 
                                    class="btn btn-block btn-checkbox"
                                    :class="phpversion=='php80rc'&&'active'">
                                    <input type="radio" name="phpVersion" v-model="phpversion" value="php80rc">
                                    <p >PHP 8.0</p>
                                </label>
                            </div>
                        </div>
                    </div> 
                    <button  type="submit" class="btn btn-base btn-block"><span 
                             ><span 
                                >
                                Update PHP-CLI Version
                            </span></span></button>
                </form>
            </div>
        </div>
    </div>
</template>


<style scoped src="@/assets/styles/server.css"></style>

<script>
    export default {
        data() {
            return {
                phpversion:'',
            };
        },
    };
    
</script>