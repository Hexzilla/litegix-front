<template> 
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="webapplication-index-page">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="pull-left">Web Application</h4>
                    <div class="d-flex pull-right">
                        <div 
                            class="form-group form-search d-flex justify-content-between align-items-center"><input
                                 type="text" placeholder="Search..." class="form-control input-lg">
                            <!---->
                            <!---->
                        </div>
                        <div><a
                                class="btn btn-success" data-nsfw-filter-status="swf">Create Web App</a></div>
                    </div>
                    <div class="clearfix"></div>
                </div>
                <div class="panel-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Web Application Name</th>
                                <th class="text-center">Status</th>
                                <th>Owner</th>
                                <th>Domain</th>
                                <th>PHP Version</th>
                                <th class="text-center">Stack</th>
                                <th class="text-right"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="7">You don't have anything inside here yet.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>