<template>
  <v-app>
    <!--begin::Advance Table Widget 10-->
    <v-card class="card card-custom gutter-b">
      <!--begin::Header-->
      <div class="card-header border-0 py-5">
        <v-card-title>
          <h1>Create Canvas</h1>
          <v-spacer></v-spacer>
        </v-card-title>
       
      </div>
      <!--end::Header-->
      <!--begin::Body-->
      <div class="card-body py-0">
        <v-form>
          <v-text-field
            outlined
            dense
            id="canvas_name"
            label="Canvas Name"
            v-model="form.canvas_name"
            required
          >
          </v-text-field>

          <b-form-group
            id="input-group-2"
            :label="'Themes(' + themesCount + ')'"
            label-for="themes"
          >
            <b-link id="theme">Add new Themes</b-link>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            :label="'Plugins(' + pluginsCount + ')'"
            label-for="plugins"
          >
            <b-link id="plugins">Add new Plugins</b-link>
          </b-form-group>

          <h5>Custom Themes/Plugins from link</h5>
          <v-alert type="warning" elevation="2">
            WP Canvas can install any Themes or Plugin from your storage.<br />
            <strong>Note:</strong> Wordpress Plugin/Theme
            <strong>MUST</strong> be in <strong>ZIP</strong> and
            <strong>publicly accessilbe</strong>. The installation wil fail if
            you are using Private or Restricted Link.
          </v-alert>
          <v-row>
            <v-col
              cols="12"
              md="4"
            >
            <v-text-field
              outlined
              dense
              label="Label"
              id="custom_label"
            >
            </v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
            <v-text-field 
              outlined
              dense
              label="Link" 
              id="custom_link"
              >
            </v-text-field>
            </v-col>
            <v-col
              cols="12"
              md="4"
            >
            <v-autocomplete 
              outlined
              dense
              label="Type" 
              id="custom_type"
              >
            </v-autocomplete>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <h5>Cleanup</h5>
          <v-list>
            <v-list-item-group>
              <v-list-item
                 v-for="option in checkItem"
                :key="option.value"
              >
                <v-list-item-icon>
                  <b-form-checkbox
                    :key="option.value"
                    :value="option.value"
                    size="lg"
                  ></b-form-checkbox>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="option.label"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>

          <v-divider></v-divider>

          <h5>Pre-defined Settings</h5>

          <v-autocomplete
            outlined
            dense
            id="sel_language"
            label="Site language" 
            :items=sel_language
            >
          </v-autocomplete>
          <v-autocomplete
            dense
            outlined
            label="Time Zone"
            id="sel_timezone"
            :items="sel_timezone"
          >
          </v-autocomplete>

          <!-- <b-form-group label="Date Format" label-for="radio-group-1">
            <b-form-radio-group id="radio-group-1" stacked size="lg">
              <b-form-radio
                v-for="option in dateformats"
                :key="option.value"
                :value="option.value"
                size="lg"
              >
                {{ option.text }}<br />
                <code>{{ option.value }}</code>
              </b-form-radio>
            </b-form-radio-group>
          </b-form-group> -->
          <v-radio-group v-model="radioGroup" label="Date Format">
            <v-radio
              v-for="option in dateformats"
              :key="option.value"
              :value="option.value"
              :label="`${option.value}`"
            ></v-radio>
          </v-radio-group>
          <v-radio-group v-model="radioGroup" label="Time Format">
            <v-radio
              v-for="option in timeformats"
              :key="option.value"
              :value="option.value"
              :label="`${option.value}`"
            ></v-radio>
            <b-link>Learn how to format date and time.</b-link>
          </v-radio-group>

          <b-form-group label="Organize upload">
            <b-form-checkbox size="lg"
              >Organize my uploads into month-and year-based
              folders</b-form-checkbox
            >
          </b-form-group>

          <b-form-group label="Search engine visibility">
            <b-form-checkbox value="searchable" size="lg"
              >Discourage search engine from indexing this site</b-form-checkbox
            >
          </b-form-group>

          <v-radio-group v-model="radioGroup" label="Permalink">
            <v-radio
              v-for="option in permalinks"
              :key="option.value"
              :value="option.value"
              :label="`${option.value}`"
            ></v-radio>
            <b-link>Learn how to format date and time.</b-link>
          </v-radio-group>

          <v-btn block large type="submit" color="primary" class="mb-5"
            >Submit</v-btn
          >
        </v-form>
      </div>
    </v-card>
  </v-app>
</template>
<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Wordpress Canvas", route: "wordpress_canvas" },
      { title: "Create Canvas" }
    ]);
  },
  data() {
    return {
      form: {
        canvas_name: ""
      },
      themesCount: 5,
      pluginsCount: 2,
      checkItem: [
        { value: "hello_world", label: "Hello World Post" },
        { value: "sample_page", label: "Sample Page" },
        {
          value: "default_theme",
          label:
            "Default Theme (twentynineteen, twentyseventeen, twentysixteen)"
        },
        { value: "default_plugin", label: "Default Plugin" },
        {
          value: "sample_file",
          label: "Sample File (wp-config.sample.php, readme.html"
        }
      ],
      sel_language: [{ value: "en", text: "English" }],
      sel_timezone: [{ value: "Tokyo", text: "Tokyo(+09:00)" }],
      dateformats: [
        { value: "F j, Y", text: "July 1, 2021" },
        { value: "m/d/Y", text: "07/01/2021" },
        { value: "Y-m-d", text: "2021-07-01" },
        { value: "d/m/Y", text: "01/07/2021" },
        { value: "", text: "Custom Date Format" }
      ],
      timeformats: [
        { value: "g:i a", text: "1:25 am" },
        { value: "g:i A", text: "1:25 AM" },
        { value: "H:i", text: "01:52" },
        { value: "", text: "Custom Time Format" }
      ],
      permalinks: [
        { value: "http://yourdomain.com/?p=123", text: "Plain" },
        {
          value: "http://yourdomain.com/2021/07/01/sample-post/",
          text: "Day and name"
        },
        {
          value: "http://yourdomain.com/07/01/sample-post",
          text: "month and name"
        },
        { value: "http://yourdomain.com/archives/123", text: "Numeric" },
        { value: "http://yourdomain.com/sample-post/", text: "Post name" },
        { value: "", text: "Custom Date Format" }
      ]
    };
  }
};
</script>
