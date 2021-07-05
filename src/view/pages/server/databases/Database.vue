<template>
  <div>
    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark">
            PHPMyAdmin</span
          >
        </h3>
      </div>
      <div class="card-body py-0">
        <b-table
          empty-text="You don't have anything inside here yet."
          :items="items"
          :fields="fields"
          show-empty
        >
        </b-table>
      </div>
    </div>

    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark">Database</span>
        </h3>
        <div class="card-toolbar">
          <input
            type="text"
            placeholder="Search..."
            class="form-control input-lg w-200px mr-5"
          />
          <b-link to="database/create">
            <a class="btn btn-success font-weight-bolder font-size-sm"
              >Create Database</a
            >
          </b-link>
        </div>
      </div>
      <div class="card-body py-0">
        <b-table :items="items1" :fields="fields1">
          <template #cell(database_name)="data">
            <i class="rc rc-ln-database rc-table-icon"></i
            >{{ data.item.database_name }}
          </template>
          <template #cell(database_user)="data">
            <ul class="list-inline" style="margin-bottom: 0px">
              <li>
                <b-link to="database/grant">
                  <a href=""
                    ><span class="label label-success">
                      {{ data.value }} </span
                  ></a>
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

    <div class="card card-custom gutter-b">
      <div class="card-header border-0 py-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label font-weight-bolder text-dark"
            >Database User</span
          >
        </h3>
        <div class="card-toolbar">
          <input
            type="text"
            placeholder="Search..."
            class="form-control input-lg w-200px mr-5"
          />
          <b-link to="database/createuser">
            <a class="btn btn-success font-weight-bolder font-size-sm"
              >Create Database User</a
            >
          </b-link>
        </div>
      </div>
      <div class="card-body py-0">
        <b-table
          empty-text="You don't have anything inside here yet."
          :items="items2"
          :fields="fields2"
          show-empty
        ></b-table>
      </div>
    </div>
  </div>
</template>


<style scoped src="@/assets/styles/server.css"></style>

<script>
export default {
  data() {
    return {
      fields: [
        "web_application_name",
        { key: "phpmyadmin_version", label: "PHPMyAdmin Version" },
        "domain",
        "PHP_ version",
        "delete",
      ],
      items: [],
      fields1: ["database_name", "database_user", "collation", "delete"],
      items1: [
        {
          database_name: "db",
          database_user: "root",
          collation: "utf8_general_ci",
          delete: 4,
        },
      ],
      fields2: ["database_user", "change_password", "delete"],
      items2: [],
    };
  },
};
</script>