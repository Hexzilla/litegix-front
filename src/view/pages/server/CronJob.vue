<template>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="pull-left">Cron Job</h4>
                <div class="d-flex pull-right">
                    <div 
                        class="form-group form-search d-flex justify-content-between align-items-center">
                        <input
                             type="text" placeholder="Search..." class="form-control input-lg">
                    </div>
                    <div>
                        <b-link to="cronjob/create">
                            <a class="btn btn-success">Create</a>
                        </b-link>
                    </div>
                </div>
                <div class="clearfix"></div>
                <p >Rebuilding Cron Job will delete all Cron Job configs that was generated
                    by
                    RunCloud. We will add it back to match your configuration below.</p>
            </div>
            <div class="panel-body">
                <b-table 
                    :items="items" 
                    :fields="fields"
                    show-empty
                    empty-text="You don't have any cron jobs configured yet.">
                    <template #cell(view)>
                        <i role="button" class="rc rc-preview text-primary"></i>
                    </template>
                </b-table>
            </div>
        </div>
    </div>
</template>


<style scoped src="@/assets/styles/app.css"></style>
<style scoped src="@/assets/styles/server.css"></style>

<script>
    export default {
        data() {
            return {
                fields: [
                    {key:'name',label:'Job name'},
                    {key:'view',label:'Run as'},
                    {key:'command',label:'Command'},
                    {key:'time',label:'Time to run'},
                    {key:'action',label:'Action'},
                    ],
                items: [
                ],
            };
        },
    };
</script>