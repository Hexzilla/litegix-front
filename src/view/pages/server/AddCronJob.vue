<template>
    <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h4>Add New Cron Job</h4>
            </div>
            <div class="panel-body">
                <form>
                    <div class="form-group"><label for="label" class="control-label">Job Label
                        </label>
                        <input type="text" name="label" placeholder="Label for this cron job"
                            class="form-control input-lg">

                    </div>
                    <div class="form-group"><label for="username" class="control-label">User (The user to run this job)
                        </label>
                        <input type="text" name="username" placeholder="User to run the cron job"
                            class="form-control input-lg">

                    </div>
                    <div class="form-group">
                        <label class="control-label">Vendor Binary</label>
                        <b-form-select size="lg" v-model="select" :options="keys"></b-form-select>
                    </div>
                    <div class="form-group"><label for="command" class="control-label">Command</label> <textarea
                            name="command" rows="3"
                            placeholder="/path/to/script.(sh | php | js) OR if the vendor binary is empty you can rm -rf /tmp/*"
                            class="form-control"></textarea>

                    </div>
                    <h4>Pre-defined Settings</h4>
                    <div class="form-group">
                        <label class="control-label">Predefined Settings</label>
                        <b-form-select size="lg" v-model="select" :options="keys"></b-form-select>
                    </div>
                    <div>
                        <h4>Custom Settings</h4>
                        <div class="form-group"><label for="minute" class="control-label">Minute
                            </label>
                            <input type="text" name="minute" placeholder="" class="form-control input-lg">

                        </div>
                        <div class="form-group"><label for="hour" class="control-label">Hour
                            </label>
                            <input type="text" name="hour" placeholder="" class="form-control input-lg">

                        </div>
                        <div class="form-group"><label for="dayOfMonth" class="control-label">Day of Month
                            </label>
                            <input type="text" name="dayOfMonth" placeholder="" class="form-control input-lg">

                        </div>
                        <div class="form-group"><label for="month" class="control-label">Month
                            </label>
                            <input type="text" name="month" placeholder="" class="form-control input-lg">

                        </div>
                        <div class="form-group"><label for="dayOfWeek" class="control-label">Day of Week
                            </label>
                            <input type="text" name="dayOfWeek" placeholder="" class="form-control input-lg">

                        </div>
                    </div>
                    <button data-v-69273b5e="" type="submit" class="btn btn-base btn-block"><span data-v-293d8245=""
                            data-v-69273b5e="" data-nsfw-filter-status="swf"><span data-v-293d8245=""
                                data-nsfw-filter-status="swf">
                                Create cron job
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
                select: '',
                keys: [],
            };
        },
    };
</script>