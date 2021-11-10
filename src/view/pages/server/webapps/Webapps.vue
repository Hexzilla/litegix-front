<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Web Application</span
        >
      </h3>
      <div class="card-toolbar">
        <!-- <input
          type="text"
          placeholder="Search..."
          class="form-control input-lg w-200px mr-5"
        /> -->
        <b-link to="webapps/create/custom">
          <a class="btn btn-primary font-weight-bolder font-size-sm mr-5 mb-5"
            >Create Custom Web Application</a
          >
        </b-link>
        <b-link to="webapps/create/wordpress">
          <a class="btn btn-success font-weight-bolder font-size-sm mr-5 mb-5"
            >Create 1 Click WordPress</a
          >
        </b-link>
        <b-link to="webapps/create/phpmyadmin">
          <a class="btn btn-info font-weight-bolder font-size-sm mr-5 mb-5"
            >Create 1 Click PHPMyAdmin</a
          >
        </b-link>
      </div>
    </div>
    <div class="card-body py-0">
      <b-table
        :items="items"
        :fields="fields"
        empty-text="There is nothing"
        show-empty
      >
        <template #cell(name)="data">
          <a v-on:click="navigateApp($event, data.item)" href="#">{{
            data.item.name
          }}</a>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { GET_WEB_APPLICATIONS } from "@/core/services/store/system.module";
export default {
  data() {
    return {
      fields: [
        { key: "name", label: "Name" },
        {
          key: "status"
        },
        "owner",
        {
          key: "domainName",
          label: "domain"
        },
        "phpVersion",
        {
          key: "stackMode",
          label: "Stack"
        }
      ],
      items: []
    };
  },
  mounted() {
    this.serverId = this.$route.params.serverId;
    this.$store.dispatch(GET_WEB_APPLICATIONS, this.serverId).then(res => {
      console.log(res.data);
      this.items = res.data.apps;
    });
  },
  methods: {
    navigateApp(e, item) {
      e.preventDefault();
      console.log("navigate", item.id);
      this.$router.push({
        path: `/servers/${this.serverId}/webapps/${item.id}`
      });
    }
  }
};
</script>
