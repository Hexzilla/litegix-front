<template>
    <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4>Add New Database</h4>
                <p >If you have changed your <strong>root</strong> database password,
                    please update your new password inside <code>/etc/mysql/my.cnf</code> or adding new database won't
                    work.</p>
            </div>
            <div class="panel-body">
                <form>
                    <div class="form-group"><label for="name" class="control-label">Database Name
                        </label>
                        <input type="text" name="name" placeholder="Only alphanumeric and/or _ are allowed"
                            class="form-control input-lg">
                    </div>
                    <div class="form-group">
                        <label class="control-label">Assign Database User</label>
                        <b-form-select size="lg" v-model="select" :options="items"></b-form-select>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Collation (Optional)</label>
                        <b-form-select size="lg" v-model="select" :options="items"></b-form-select>
                    </div>
                    <button  type="submit" class="btn btn-base btn-block">
                        <span><span> Add Database </span></span>
                    </button>
                </form>
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
                select: '',
                items: [],
            };
        },
    };
</script>