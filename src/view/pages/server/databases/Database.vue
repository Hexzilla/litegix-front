<template>
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="pull-left">PHPMyAdmin</h4>
            </div>
            <div class="panel-body">
                <b-table
                    empty-text="You don't have anything inside here yet."
                    :items="items"
                    :fields="fields"
                    show-empty>
                </b-table>
            </div>
        </div>
        <div class="panel panel-default database-page">
            <div class="panel-heading">
                <h4 class="pull-left">Database</h4>
                <div class="d-flex pull-right">
                    <div class="margin-bottom-unset form-group form-search d-flex justify-content-between align-items-center"><input
                            type="text" placeholder="Search..." class="form-control input-lg">


                    </div>
                    <div>
                        <b-link to="database/create">
                            <a class="btn btn-success">Create Database</a>
                        </b-link>
                    </div>
                </div>
                <div class="clearfix"></div>
                <p>If you have changed your <strong>root</strong> database password,
                    please update your new password inside <code>/etc/mysql/my.cnf</code> or adding new database won't
                    work.</p>
            </div>
            <div class="panel-body">
                <b-table :items="items1" :fields="fields1">
                    <template #cell(database_name) = "data">
                        <i class="rc rc-ln-database rc-table-icon"></i>{{data.item.database_name}}
                    </template>
                    <template #cell(database_user) = "data">
                        <ul class="list-inline" style="margin-bottom: 0px;">
                            <li>
                                <b-link to="database/grant">
                                    <a href=""><span class="label label-success"> {{data.value}} <i class="rc rc-plus"></i></span></a>
                                </b-link>
                            </li>
                        </ul>
                    </template>
                    <template #cell(delete)>
                        <a role="button" class="text-danger rc rc-delete"></a>
                    </template>
                </b-table>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4 class="pull-left">Database User</h4>
                <div class="d-flex pull-right">
                    <div class="margin-bottom-unset form-group form-search d-flex justify-content-between align-items-center"><input
                            type="text" placeholder="Search..." class="form-control input-lg">


                    </div>
                    <div>
                        <b-link to="database/createuser">
                            <a class="btn btn-success">Create Database User</a>
                        </b-link>
                    </div>
                </div>
                <div class="clearfix"></div>
                <p>Here are the list of database users that you have registered. You can
                    attach these users to your database to give them access.</p>
            </div>
            <div class="panel-body">
                <b-table
                    empty-text="You don't have anything inside here yet."
                    :items="items2"
                    :fields="fields2"
                    show-empty>
                </b-table>
            </div>
        </div>
    </div>
</template>



<style scoped src="@/assets/styles/server.css"></style>

<script>
    export default {
        data() {
            return {
                fields: ['web_application_name', {key:'phpmyadmin_version',label:'PHPMyAdmin Version'}, 'domain', 'PHP_ version', 'delete'],
                items: [
                ],
                fields1 : ['database_name', 'database_user', 'collation', 'delete'],
                items1 : [
                    {database_name:"db",database_user:'root',collation:'utf8_general_ci','delete':4},
                ],
                fields2 : ['database_user', 'change_password', 'delete'],
                items2 : [],
            };
        },
    };
    
</script>