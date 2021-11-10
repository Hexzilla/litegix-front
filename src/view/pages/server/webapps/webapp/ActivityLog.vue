<template>
  <div>
    <KTCard ref="deploy" title="Activity Logs">
      <template v-slot:toolbar>
        <input
          type="text"
          placeholder="Search..."
          class="form-control input-lg w-200px mr-5"
        />
      </template>
      <template v-slot:body>
        <div class="overflow-auto">
          <b-table
            :items="activities"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
            show-empty
            empty-text="You don't have anything activity logs."
          >
            <template #cell(level)="data">
              <div v-if="data.item.level == 1">
                <span class="label label-lg label-inline label-success"
                  >Info</span
                >
              </div>
              <div v-if="data.item.level == 2">
                <span class="label label-lg label-inline label-warning"
                  >Warning</span
                >
              </div>
              <div v-if="data.item.level == 3">
                <span class="label label-lg label-inline label-danger"
                  >Error</span
                >
              </div>
            </template>
            <template #cell(date)="{ item }">
              {{ getActivityDate(item.date) }}
            </template>
          </b-table>
          <b-pagination
            class="float-right"
            v-model="currentPage"
            :total-rows="activities.length"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
        </div>
      </template>
    </KTCard>
  </div>
</template>

<style>
.w10 {
  width: 10%;
}
.w60 {
  width: 70%;
}
</style>

<script>
import KTCard from "@/view/content/Card.vue";
import moment from "moment";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import { FETCH_ACTIVITY_LOGS } from "@/core/services/store/account.module";
export default {
  components: {
    KTCard
  },
  data() {
    return {
      fields: [
        {
          key: "level",
          tdClass: "w10"
        },
        {
          key: "message",
          tdClass: "w60"
        },
        {
          key: "date"
        }
        /*{
          key: "category",
          thClass: "text-center",
          tdClass: "text-center"
        }*/
      ],
      activities: [],
      currentPage: 1,
      perPage: 10
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Activity Log" }
    ]);

    this.$store.dispatch(FETCH_ACTIVITY_LOGS).then(response => {
      if (response.success) {
        this.activities = response.data.activities;
        console.log("activities", this.activities);
      }
    });
  },
  methods: {
    getActivityDate(date) {
      //return moment(date).format("MM/DD/YYYY");
      return moment(date).format("lll");
    }
  }
};
</script>
