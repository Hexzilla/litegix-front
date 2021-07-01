<template>
    <v-app>
   <!--begin::Advance Table Widget 10-->
        <div class="card card-custom gutter-b">
            <!--begin::Header-->
            <div class="card-header border-0 py-5">
                <h3 class="card-title align-items-start flex-column">
                    <span class="card-label font-weight-bolder text-dark"
                    >Create Canvas</span
                    >
                </h3>
            </div>
            <!--end::Header-->
            <!--begin::Body-->
            <div class="card-body py-0">
                <b-form >
                    <b-form-group
                        id="input-group-1"
                        label="Canvas Name"
                        label-for="canvas_name"
                        >
                        <b-form-input
                            id="canvas_name"
                            v-model="form.canvas_name"
                            required
                            placeholder="My awesome Wordpress Canvas"
                        ></b-form-input>
                    </b-form-group>

                    <b-form-group
                        id="input-group-2"
                        :label="'Themes('+themesCount+')'"
                        label-for="themes"
                        >
                        <b-link
                            id="theme"
                        >Add new Themes</b-link>
                    </b-form-group>

                    <b-form-group
                        id="input-group-2"
                        :label="'Plugins('+pluginsCount+')'"
                        label-for="plugins"
                        >
                        <b-link
                            id="plugins"
                        >Add new Plugins</b-link>
                    </b-form-group>
                    
                    <h5>Custom Themes/Plugins from link</h5>
                    <v-alert
                        type="warning"
                        elevation="2"
                    >
                        WP Canvas can install any Themes or Plugin from your storage.<br>
                        <strong>Note:</strong> Wordpress Plugin/Theme <strong>MUST</strong> be in <strong>ZIP</strong> and <strong>publicly accessilbe</strong>. The installation wil fail if you are using Private or Restricted Link. 
                    </v-alert>
                    <div class="row">
                        <b-form-group
                            label="Label"
                            class="col-md-3"
                            label-for="custom_label">
                            <b-form-input
                                id="custom_label"
                                placeholder="Theme or Plugin name"></b-form-input>
                        </b-form-group>
                        <b-form-group
                            label="Link"
                            class="col-md-6"
                            label-for="custom_link" >
                            <b-form-input
                                id="custom_link"
                                placeholder="Link to Theme or Plugin in ZIP format"></b-form-input>
                        </b-form-group>
                        <b-form-group
                            label="Type"
                            class="col-md-3"
                            label-for="custom_type">
                            <b-form-select
                                id="custom_type"></b-form-select>
                        </b-form-group>
                    </div>
                    <v-divider></v-divider>
                    <h5>Cleanup</h5>
                    
                    <b-form-group label="All checked items will be permanentally deleted">
                        <b-form-checkbox
                            v-for="option in checkItem"
                            :key="option.value"
                            :value="option.value"
                            size="lg"
                            >
                            {{ option.label }}
                        </b-form-checkbox>
                    </b-form-group>

                    <v-divider></v-divider>
                        
                    <h5>Pre-defined Settings</h5>

                    <b-form-group
                        label="Site language"
                        label-for="sel_language">
             
                        <b-form-select
                            id="sel_language"
                            :options="sel_language"
                        ></b-form-select>
                    </b-form-group>

                    <b-form-group
                        label="Time Zone"
                        label-for="sel_timezone">
             
                        <b-form-select
                            id="sel_timezone"
                            :options="sel_timezone"
                        ></b-form-select>
                    </b-form-group>

                    <b-form-group 
                        label="Date Format"
                        label-for="radio-group-1">
                        <b-form-radio-group 
                            id="radio-group-1"
                            stacked
                            size="lg" >
                            <b-form-radio 
                                v-for="option in dateformats"
                                :key="option.value"
                                :value="option.value"
                                size="lg">
                                {{option.text}}<br>
                                <code>{{option.value}}</code>
                            </b-form-radio>
                        </b-form-radio-group>
                    </b-form-group>

                    <b-form-group 
                        label="Time Format"
                        label-for="radio-group-2">
                        <b-form-radio-group 
                            id="radio-group-2"
                            stacked
                            size="lg" >
                            <b-form-radio 
                                v-for="option in timeformats"
                                :key="option.value"
                                :value="option.value"
                                size="lg">
                                {{option.text}}<br>
                                <code>{{option.value}}</code>
                            </b-form-radio>
                        </b-form-radio-group>
                        <b-link>Learn how to format date and time.</b-link>
                    </b-form-group>
                    
                   
                    <b-form-group 
                        label="Organize upload">
                        <b-form-checkbox
                            size="lg">Organize my uploads into month-and year-based folders</b-form-checkbox>
                    </b-form-group>

                    <b-form-group 
                        label="Search engine visibility">
                        <b-form-checkbox
                            value="searchable"
                            size="lg">Discourage search engine from indexing this site</b-form-checkbox>
                    </b-form-group>

                    <b-form-group 
                        label="Permalink"
                        label-for="radio-group-3">
                        <b-form-radio-group 
                            id="radio-group-3"
                            stacked
                            size="lg" >
                            <b-form-radio 
                                v-for="option in permalinks"
                                :key="option.value"
                                :value="option.value"
                                size="lg">
                                {{option.text}}<br>
                                <code>{{option.value}}</code>
                            </b-form-radio>
                        </b-form-radio-group>
                        <b-link>Learn how to format date and time.</b-link>
                    </b-form-group>
                    
                    <b-button block type="submit" variant="primary">Submit</b-button>
                </b-form>
            </div>
        </div>
    </v-app>
</template>
<script>

export default {
    data() {
        return {
            form: {
                canvas_name:'',
            },
            themesCount:5,
            pluginsCount:2,
            checkItem:[
                {value:"hello_world",label:"Hello World Post"},
                {value:"sample_page",label:"Sample Page"},
                {value:"default_theme",label:"Default Theme (twentynineteen, twentyseventeen, twentysixteen)"},
                {value:"default_plugin",label:"Default Plugin"},
                {value:"sample_file",label:"Sample File (wp-config.sample.php, readme.html"},
            ],
            sel_language:[
                { value: 'en', text: 'English' },
            ],
            sel_timezone:[
                { value: 'Tokyo', text: 'Tokyo(+09:00)' },
            ],
            dateformats:[
                {value:'F j, Y',text:"July 1, 2021"},
                {value:'m/d/Y',text:"07/01/2021"},
                {value:'Y-m-d',text:"2021-07-01"},
                {value:'d/m/Y',text:"01/07/2021"},
                {value:'',text:"Custom Date Format"},
            ],
            timeformats:[
                {value:'g:i a',text:"1:25 am"},
                {value:'g:i A',text:"1:25 AM"},
                {value:'H:i',text:"01:52"},
                {value:'',text:"Custom Time Format"},
            ],
            permalinks:[
                {value:'http://yourdomain.com/?p=123',text:"Plain"},
                {value:'http://yourdomain.com/2021/07/01/sample-post/',text:"Day and name"},
                {value:'http://yourdomain.com/07/01/sample-post',text:"month and name"},
                {value:'http://yourdomain.com/archives/123',text:"Numeric"},
                {value:'http://yourdomain.com/sample-post/',text:"Post name"},
                {value:'',text:"Custom Date Format"},
            ]
        };
    },
}
</script>
