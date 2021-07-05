<template>
    <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4>Grant User to Database</h4>
                <p data-nsfw-filter-status="swf">If you have changed your <strong>root</strong> database password,
                    please update your new password inside <code>/etc/mysql/my.cnf</code> or grant user to database
                    won't work.</p>
            </div>
            <div class="panel-body">
                <form>
                    <div class="form-group">
                        <label class="control-label">User</label>
                        <b-form-select size="lg" v-model="select" :options="items"></b-form-select>
                    </div>
                    <button type="submit" class="btn btn-base btn-block"><span
                           ><span>
                                Grant
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
                items: [],
                select : '',
            };
        },
    };
    
</script>