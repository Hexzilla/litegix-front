<template>
  <form action="/teams" role="form">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
        <div class="card card-customa card-stretch gutter-b">
          <div class="card-header border-0">
            <h4>Permission</h4>
          </div>
          <div class="card-body pt-0">
            <div class="toggle">
              <ul class="list-inline">
                <li class="list-inline-item mr-5">
                  <a href="">Check all</a>
                </li>
                <li class="list-inline-item mr-5">
                  <a href="">Unchecked all</a>
                </li>
                <li class="list-inline-item mr-5">
                  <a href="">Expand all</a>
                </li>
              </ul>
            </div>
            <ul class="list-unstyled">
              <li class="item">
                <h5>Server Sharing Rules</h5>
                <hr />
                <div
                  class="accordion accordion-light accordion-toggle-plus"
                  role="tablist"
                >
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <div class="card-title" v-b-toggle.summary>
                        <i class="flaticon-pie-chart-1"></i>Summary
                      </div>
                    </b-card-header>
                    <b-collapse id="summary" visible role="tabpanel">
                      <b-card-body class="pl-4">
                        <b-form-group>
                          <b-form-checkbox size="lg" name="summary_data_view"
                            ><p class="title">View server summary data</p>
                            <p class="sub"></p
                          ></b-form-checkbox>
                        </b-form-group>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </div>

                <div
                  class="accordion accordion-light accordion-toggle-plus"
                  role="tablist"
                >
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <div class="card-title" v-b-toggle.health>
                        <i class="fas fa-heartbeat"></i>Health
                      </div>
                    </b-card-header>
                    <b-collapse id="health" visible role="tabpanel">
                      <b-card-body class="pl-4">
                        <b-form-group>
                          <b-form-checkbox size="lg" name="health_disk_cleanup"
                            ><p class="title">Run disk cleanup</p>
                            <p class="sub"></p
                          ></b-form-checkbox> </b-form-group
                        ><b-form-group>
                          <b-form-checkbox size="lg" name="health_view"
                            ><p class="title">View server health page</p>
                            <p class="sub"></p
                          ></b-form-checkbox>
                        </b-form-group>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </div>

                 <div
                  class="accordion accordion-light accordion-toggle-plus"
                  role="tablist"
                >
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <div class="card-title" v-b-toggle.database>
                        <i class="fas fa-database"></i>Database
                      </div>
                    </b-card-header>
                    <b-collapse id="database" visible role="tabpanel">
                      <b-card-body class="pl-4">
                        <b-form-group>
                          <b-form-checkbox size="lg" name="database_view"
                            ><p class="title">View database page</p>
                            <p class="sub"></p
                          ></b-form-checkbox>
                        </b-form-group>
                        <b-form-group>
                          <b-form-checkbox size="lg" name="database_create"
                            ><p class="title">Add database</p>
                            <p class="sub"></p
                          ></b-form-checkbox> </b-form-group
                        >
                        <b-form-group>
                          <b-form-checkbox size="lg" name="delete_database"
                            ><p class="title">Delete database</p>
                            <p class="sub"></p
                          ></b-form-checkbox> </b-form-group
                        >
                        <b-form-group>
                          <b-form-checkbox size="lg" name="create_database_user"
                            ><p class="title">Add database user</p>
                            <p class="sub"></p
                          ></b-form-checkbox> </b-form-group
                        >
                        <b-form-group>
                          <b-form-checkbox size="lg" name="change_database_user_password"
                            ><p class="title">Change database user password</p>
                            <p class="sub"></p
                          ></b-form-checkbox> </b-form-group
                        >
                        <b-form-group>
                          <b-form-checkbox size="lg" name="delete_database_user"
                            ><p class="title">Delete database user</p>
                            <p class="sub"></p
                          ></b-form-checkbox> </b-form-group
                        >
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </div>

                <div
                  class="accordion accordion-light accordion-toggle-plus"
                  role="tablist"
                >
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                      <div class="card-title" v-b-toggle.system_user>
                        <i class="fas fa-user"></i>System User
                      </div>
                    </b-card-header>
                    <b-collapse id="system_user" visible role="tabpanel">
                      <b-card-body class="pl-4">
                        <b-form-group>
                          <b-form-checkbox size="lg" name="system_user_view"
                            ><p class="title">View system user page</p>
                            <p class="sub"></p
                          ></b-form-checkbox>
                        </b-form-group>
                        <b-form-group>
                          <b-form-checkbox size="lg" name="system_user_create"
                            ><p class="title">Add system user</p>
                            <p class="sub"></p
                          ></b-form-checkbox> </b-form-group
                        >
                        <b-form-group>
                          <b-form-checkbox size="lg" name="delete_system_user"
                            ><p class="title">Delete system user</p>
                            <p class="sub"></p
                          ></b-form-checkbox> </b-form-group
                        >
                        
                        <b-form-group>
                          <b-form-checkbox size="lg" name="change_system_user_password"
                            ><p class="title">Change system user password</p>
                            <p class="sub"></p
                          ></b-form-checkbox> </b-form-group
                        >
                      </b-card-body>
                    </b-collapse>
                  </b-card>
                </div>

              </li>
              <li class="item">
                <h5>Atomic Deployment Sharing Rules (Coming Soon)</h5>
                <hr />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
        <div class="card card-customa card-stretch gutter-b">
          <div class="card-header border-0">
            <h4>Create A Team</h4>
            <p>
              Create a team and select which permissions the members inside this
              team have over your servers.
            </p>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="name" class="control-label">Team Name </label>
              <input
                type="text"
                name="name"
                placeholder="Name of this team. E.g: Sysadmin, Developer, Interns"
                class="form-control input-lg"
              />
            </div>
            <div class="form-group">
              <label for="description" class="control-label"
                >Team Description</label
              >
              <textarea
                name="description"
                rows="5"
                placeholder="Description of the team"
                class="form-control"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              Add Team
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
