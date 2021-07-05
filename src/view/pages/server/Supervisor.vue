<template>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="pull-left">Supervisor Jobs</h4>
                <div class="d-flex pull-right">
                    <div 
                        class="form-group form-search d-flex justify-content-between align-items-center"><input
                             type="text" placeholder="Search..." class="form-control input-lg">
                        
                    </div>
                    <div>
                        <b-link to="supervisor/create">
                            <a class="btn btn-success"
                            >Create</a>
                        </b-link>
                    </div>
                </div>
                <div class="clearfix"></div>
                <p >Monitor and control processes on your server.</p>
            </div>
        </div>
        <div></div>
        <div class="row">
            <div class="text-right col-md-12">
                <div class="text-right col-md-12"></div>
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