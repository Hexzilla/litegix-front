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
        <b-link to="application/create/custom">
          <a class="btn btn-primary font-weight-bolder font-size-sm mr-5 mb-5"
            >Create Custom Web Application</a
          >
        </b-link>
        <b-link to="application/create/wordpress">
          <a class="btn btn-success font-weight-bolder font-size-sm mr-5 mb-5"
            >Create 1 Click WordPress</a
          >
        </b-link>
        <b-link to="application/create/phpmyadmin">
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
      ></b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        "web_application_name",
        "status",
        "owner",
        "domain",
        "PHP_ version",
        "stack",
      ],
      items: [],
    };
  },
};
</script>