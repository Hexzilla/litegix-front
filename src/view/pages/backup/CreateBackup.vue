<template>
  <v-card class="card-body">
    <v-card-title>
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder"
          >Create Backup</span
        >
      </h3>
    </v-card-title>
    
      <b-form>
        <b-form-group v-bind:label="`Store in ${store}`">
          <b-row>
            <b-col>
              <b-form-radio
                v-model="store"
                button
                class="d-block h-100"
                button-variant="outline-primary btn-block h-100"
                size="lg"
                value="basic"
                name="store"
                ><strong>Backup Basic</strong>
                <br />
                5GB free of 5GB / Unlimited sites
              </b-form-radio>
            </b-col>
            <b-col>
              <b-form-radio
                v-model="store"
                button
                class="d-block h-100"
                button-variant="outline-primary btn-block h-100"
                size="lg"
                value="pro"
                name="store"
                ><strong>Backup Pro</strong>
                <br />
                2tB free of 2tB / 9999 sites available of 9999 sites
              </b-form-radio>
            </b-col>
          </b-row>
        </b-form-group>

        <b-form-group label="What do you plan to Backup?">
          <b-form-radio-group
            stacked
            v-model="backup_plan"
            :options="plans"
            size="lg"
          ></b-form-radio-group>
        </b-form-group>

        <b-form-group label="Web Application">
          <b-form-select :items="webapps"></b-form-select>
        </b-form-group>

        <b-form-group label="Database">
          <b-form-select :items="databases"></b-form-select>
        </b-form-group>

        <b-form-group label="Site Label">
          <b-form-input
            v-model="site_label"
            placeholder="Label for this Backup Site"
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Backup Every">
          <vue-slider
            v-model="slider1"
            :data="ticksLabels1"
            :max="7"
            :marks="true"
            tooltip="always"
            :tooltip-formatter="formatter1"
            :process-style="{ backgroundColor: '#3498db' }"
            :tooltip-style="{
              backgroundColor: '#3498db',
              borderColor: '#3498db'
            }"
          >
          </vue-slider>
        </b-form-group>

        <b-form-group label="Backup Will Start At" class="w-300px mt-15">
          <b-input-group size="lg" append="GMT +0900">
            <b-form-input type="time"></b-form-input>
          </b-input-group>
        </b-form-group>

        <b-form-group label="Backup Delete">
          <vue-slider
            v-model="slider2"
            :data="ticksLabels2"
            :marks="true"
            tooltip="always"
            :tooltip-formatter="formatter2"
            :process-style="{ backgroundColor: '#3498db' }"
            :tooltip-style="{
              backgroundColor: '#3498db',
              borderColor: '#3498db'
            }"
            :max="3"
          >
          </vue-slider>
        </b-form-group>
        <b-form-group
          class="mt-15"
          label="Send notification to Email, Slack and/or Telegram when"
        >
          <b-form-checkbox size="lg" v-model="failed"
            >Backup failed</b-form-checkbox
          >
          <b-form-checkbox size="lg" v-model="success"
            >Backup success</b-form-checkbox
          >
        </b-form-group>
        <b-button variant="primary btn-block">Create</b-button>
      </b-form>
    </v-card>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
export default {
  data: () => ({
    plans: [
      {
        text: "Toggle this custom radioBoth (Recommended for WordPress)",
        value: "wordpress"
      },
      { text: "Web Application", value: "webapp" },
      { text: "Database", value: "database" }
    ],
    formatter1: "Backup every {value}",
    formatter2: "Delete backup file after {value}",
    agreeflag: false,
    agreeDialog: false,
    store: "basic",
    success: false,
    failed: false,
    time: null,
    timer_dialog: false,
    webapps: [],
    databases: [],
    backup_plan: "database",
    site_label: "",
    slider1: 0,
    slider2: 0,
    ticksLabels1: [
      "30 minites",
      "1 hure",
      "2 hure",
      "6 hure",
      "12 hure",
      "1 day",
      "3 day",
      "1 week"
    ],
    ticksLabels2: ["3 day", "1 week", "2 week", "1 month"]
  }),
  components: {
    VueSlider
  },
  methods: {
    confirm_agree() {
      //console.log(num);
      if (!this.agreeflag) {
        this.agreeDialog = true;
      }
    },
    agree() {
      this.agreeDialog = false;
      this.agreeflag = true;
    },
    disagree() {
      this.agreeDialog = false;
      this.agreeflag = false;
      this.slider1 = 0;
      this.slider2 = 0;
    }
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Backup", route: "Backups" },
      { title: "Create Backup" }
    ]);
  }
};
</script>
