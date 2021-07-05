<template>
  <div class="row padding-bottom">
    <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xl-offset-2">
      <div class="container-fluid">
        <div class="row padding-bottom">
          <div class="create-team">
            <form action="/teams" role="form">
              <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                <div class="panel panel-default panel-permission">
                  <div class="panel-heading">
                    <h4>Permission</h4>
                  </div>
                  <div class="panel-body">
                    <div class="toggle">
                      <ul class="list-inline">
                        <li>
                          <a href="" data-nsfw-filter-status="swf">Check all</a>
                        </li>
                        <li>
                          <a href="" data-nsfw-filter-status="swf"
                            >Unchecked all</a
                          >
                        </li>
                        <li>
                          <a href="" data-nsfw-filter-status="swf"
                            >Expand all</a
                          >
                        </li>
                      </ul>
                    </div>
                    <ul class="list-unstyled">
                      <li class="item">
                        <h4>Server Sharing Rules</h4>
                        <hr />
                        <div>
                          <div
                            @click="clickedItem"
                            data-toggle="collapse"
                            data-target="#summary"
                            aria-expanded="false"
                            class="clearfix section-title collapsed"
                          >
                            <h4 class="pull-left">
                              <img
                                src="/media/svg/teams/summary.svg?925adfbd6803716ea4de081987ec5765"
                                alt="icon"
                                data-nsfw-filter-status="sfw"
                                style="visibility: visible"
                              />
                              Summary
                            </h4>
                            <i class="rc rc-ln-chevron-down pull-right"></i>
                          </div>
                          <ul
                            id="summary"
                            class="permission-list list-unstyled collapse"
                            aria-expanded="false"
                            style="height: 0px"
                          >
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox">
                                  <label data-v-469e20da=""
                                    ><input
                                      data-v-469e20da=""
                                      type="checkbox"
                                      name="summary_data_view"
                                    />
                                    <p
                                      data-v-469e20da=""
                                      class="title"
                                      data-nsfw-filter-status="swf"
                                    >
                                      View server summary data
                                    </p>
                                    <p
                                      data-v-469e20da=""
                                      class="sub"
                                      data-nsfw-filter-status="swf"
                                    ></p>
                                  </label>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div
                            data-toggle="collapse"
                            data-target="#health"
                            aria-expanded="false"
                            class="clearfix section-title collapsed"
                          >
                            <h4 class="pull-left">
                              <img
                                src="/media/svg/teams/health.svg?3185ec4d39e408401f35bc5abcfbb37c"
                                alt="icon"
                                data-nsfw-filter-status="sfw"
                                style="visibility: visible"
                              />
                              Health
                            </h4>
                            <i class="rc rc-ln-chevron-down pull-right"></i>
                          </div>
                          <ul
                            id="health"
                            class="permission-list list-unstyled collapse"
                            aria-expanded="false"
                            style="height: 0px"
                          >
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox">
                                  <label data-v-469e20da=""
                                    ><input
                                      data-v-469e20da=""
                                      type="checkbox"
                                      name="health_view"
                                    />
                                    <p
                                      data-v-469e20da=""
                                      class="title"
                                      data-nsfw-filter-status="swf"
                                    >
                                      View server health page
                                    </p>
                                    <p
                                      data-v-469e20da=""
                                      class="sub"
                                      data-nsfw-filter-status="swf"
                                    ></p>
                                  </label>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox">
                                  <label data-v-469e20da=""
                                    ><input
                                      data-v-469e20da=""
                                      type="checkbox"
                                      name="health_disk_cleanup"
                                    />
                                    <p
                                      data-v-469e20da=""
                                      class="title"
                                      data-nsfw-filter-status="swf"
                                    >
                                      Run disk cleanup
                                    </p>
                                    <p
                                      data-v-469e20da=""
                                      class="sub"
                                      data-nsfw-filter-status="swf"
                                    ></p>
                                  </label>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <!-- <div>
                          <div data-toggle="collapse" data-target="#web-application" aria-expanded="false"
                            class="clearfix section-title collapsed">
                            <h4 class="pull-left"><img
                                src="/media/svg/teams/web-application.svg?2a76205d7bf415c3922843b998a0f125" alt="icon"
                                data-nsfw-filter-status="sfw" style="visibility: visible;"> Web Application
                              
                            </h4> <i class="rc rc-ln-chevron-down pull-right"></i>
                          </div>
                          <ul id="web-application" class="permission-list list-unstyled collapse" aria-expanded="false"
                            style="height: 0px;">
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="web_application_view">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">View web
                                      application page</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="web_application_create">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Create web
                                      application</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="web_application_rebuild">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Rebuild web
                                      application</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="web_application_manage_default">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Set/Unset default
                                      web application</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="web_application_manage_settings">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Change web
                                      application settings</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="web_application_delete">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Delete web
                                      application</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="web_application_view_webserver_log">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">View Web Server
                                      log</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="web_application_create_alias">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Create Web
                                      Application alias</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="git_attach">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Attach GIT
                                      repository</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="data_transfer_view">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">View Data Transfer
                                      Page</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="git_change_branch">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Change GIT branch
                                    </p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="git_manage_deployment_script">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Manage GIT
                                      deployment script</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> Save script and do
                                      force deploy</p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="git_detach">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Detach GIT
                                      repository</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> Remove git
                                      repository from web application</p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="script_installer_install">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Install Script
                                      Installer</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="script_installer_delete">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Delete Script
                                      Installer</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="file_manager_access">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Manage files</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> Create, edit,
                                      rename, change permissions and edit your files inside web application(s)</p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="domain_name_create">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Add domain name
                                    </p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="domain_name_delete">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Delete domain name
                                    </p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="domain_name_manage">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Manage domain name
                                    </p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="ssl_install">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Install SSL/TLS
                                      Certificate</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> Install Let's
                                      Encrypt or custom certificate</p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="ssl_manage">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Manage SSL/TLS
                                      Certificate</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> Update and/or
                                      redeploy (Let's Encrypt) SSL/TLS settings</p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="ssl_delete">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Delete SSL/TLS
                                      Certificate</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="web_application_tool_chown">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Allow to run chown
                                      tool</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="web_application_tool_change_owner">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Allow to change
                                      web application owner</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="web_application_tool_cloning">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Allow to clone web
                                      application</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="web_application_tool_httpauth">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Allow to set web
                                      application basic auth</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="web_application_manage_nginx_config">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Manage NGiNX
                                      custom config</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="web_application_manage_waf">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Manage Web
                                      Application Firewall</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="manage_wordpress_staging_site">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Manage WordPress
                                      staging site</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="runcloud_hub_view">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">View RunCloud Hub
                                      Page</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="runcloud_hub_manage">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Manage RunCloud
                                      Hub</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> Install, manage, or
                                      remove RunCloud Hub plugin inside RunCloud Panel</p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="runcloud_hub_login">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">RunCloud Hub magic
                                      link login</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> Give access to the
                                      team members to directly login to WordPress panel using a magic link</p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div> -->
                        <div>
                          <div
                            data-toggle="collapse"
                            data-target="#database"
                            aria-expanded="false"
                            class="clearfix section-title collapsed"
                          >
                            <h4 class="pull-left">
                              <img
                                src="/media/svg/teams/database.svg?60e4a56ecbb8841a0e668df5e4eb158a"
                                alt="icon"
                                data-nsfw-filter-status="sfw"
                                style="visibility: visible"
                              />
                              Database
                            </h4>
                            <i class="rc rc-ln-chevron-down pull-right"></i>
                          </div>
                          <ul
                            id="database"
                            class="permission-list list-unstyled collapse"
                            aria-expanded="false"
                            style="height: 0px"
                          >
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox">
                                  <label data-v-469e20da=""
                                    ><input
                                      data-v-469e20da=""
                                      type="checkbox"
                                      name="database_view"
                                    />
                                    <p
                                      data-v-469e20da=""
                                      class="title"
                                      data-nsfw-filter-status="swf"
                                    >
                                      View database page
                                    </p>
                                    <p
                                      data-v-469e20da=""
                                      class="sub"
                                      data-nsfw-filter-status="swf"
                                    ></p>
                                  </label>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox">
                                  <label data-v-469e20da=""
                                    ><input
                                      data-v-469e20da=""
                                      type="checkbox"
                                      name="database_create"
                                    />
                                    <p
                                      data-v-469e20da=""
                                      class="title"
                                      data-nsfw-filter-status="swf"
                                    >
                                      Add database
                                    </p>
                                    <p
                                      data-v-469e20da=""
                                      class="sub"
                                      data-nsfw-filter-status="swf"
                                    ></p>
                                  </label>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox">
                                  <label data-v-469e20da=""
                                    ><input
                                      data-v-469e20da=""
                                      type="checkbox"
                                      name="database_delete"
                                    />
                                    <p
                                      data-v-469e20da=""
                                      class="title"
                                      data-nsfw-filter-status="swf"
                                    >
                                      Delete database
                                    </p>
                                    <p
                                      data-v-469e20da=""
                                      class="sub"
                                      data-nsfw-filter-status="swf"
                                    ></p>
                                  </label>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox">
                                  <label data-v-469e20da=""
                                    ><input
                                      data-v-469e20da=""
                                      type="checkbox"
                                      name="database_user_create"
                                    />
                                    <p
                                      data-v-469e20da=""
                                      class="title"
                                      data-nsfw-filter-status="swf"
                                    >
                                      Add database user
                                    </p>
                                    <p
                                      data-v-469e20da=""
                                      class="sub"
                                      data-nsfw-filter-status="swf"
                                    ></p>
                                  </label>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox">
                                  <label data-v-469e20da=""
                                    ><input
                                      data-v-469e20da=""
                                      type="checkbox"
                                      name="database_user_change_password"
                                    />
                                    <p
                                      data-v-469e20da=""
                                      class="title"
                                      data-nsfw-filter-status="swf"
                                    >
                                      Change database user password
                                    </p>
                                    <p
                                      data-v-469e20da=""
                                      class="sub"
                                      data-nsfw-filter-status="swf"
                                    ></p>
                                  </label>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox">
                                  <label data-v-469e20da=""
                                    ><input
                                      data-v-469e20da=""
                                      type="checkbox"
                                      name="database_user_delete"
                                    />
                                    <p
                                      data-v-469e20da=""
                                      class="title"
                                      data-nsfw-filter-status="swf"
                                    >
                                      Delete database user
                                    </p>
                                    <p
                                      data-v-469e20da=""
                                      class="sub"
                                      data-nsfw-filter-status="swf"
                                    ></p>
                                  </label>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox">
                                  <label data-v-469e20da=""
                                    ><input
                                      data-v-469e20da=""
                                      type="checkbox"
                                      name="database_user_assign"
                                    />
                                    <p
                                      data-v-469e20da=""
                                      class="title"
                                      data-nsfw-filter-status="swf"
                                    >
                                      Assign database user to database
                                    </p>
                                    <p
                                      data-v-469e20da=""
                                      class="sub"
                                      data-nsfw-filter-status="swf"
                                    ></p>
                                  </label>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox">
                                  <label data-v-469e20da=""
                                    ><input
                                      data-v-469e20da=""
                                      type="checkbox"
                                      name="database_user_revoke"
                                    />
                                    <p
                                      data-v-469e20da=""
                                      class="title"
                                      data-nsfw-filter-status="swf"
                                    >
                                      Revoke database user from database
                                    </p>
                                    <p
                                      data-v-469e20da=""
                                      class="sub"
                                      data-nsfw-filter-status="swf"
                                    ></p>
                                  </label>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <!-- <div>
                          <div data-toggle="collapse" data-target="#supervisor" aria-expanded="false"
                            class="clearfix section-title collapsed">
                            <h4 class="pull-left"><img src="/media/svg/teams/supervisor.svg?b0f7a10600edd8514ae78f4d5a0bd0af"
                                alt="icon" data-nsfw-filter-status="sfw" style="visibility: visible;"> Supervisor
                              
                            </h4> <i class="rc rc-ln-chevron-down pull-right"></i>
                          </div>
                          <ul id="supervisor" class="permission-list list-unstyled collapse" aria-expanded="false"
                            style="height: 0px;">
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="supervisor_view">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">View supervisor
                                      page</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="supervisor_create">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Add supervisor job
                                    </p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="supervisor_reload">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Reload supervisor
                                      job</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="supervisor_rebuild">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Rebuild supervisor
                                      job</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="supervisor_delete">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Delete supervisor
                                      job</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div data-toggle="collapse" data-target="#cron-job" aria-expanded="false"
                            class="clearfix section-title collapsed">
                            <h4 class="pull-left"><img src="/media/svg/teams/cron-job.svg?cd1c153240b68e07bc4eefcee36e3c27"
                                alt="icon" data-nsfw-filter-status="sfw" style="visibility: visible;"> Cron Job
                              
                            </h4> <i class="rc rc-ln-chevron-down pull-right"></i>
                          </div>
                          <ul id="cron-job" class="permission-list list-unstyled collapse" aria-expanded="false"
                            style="height: 0px;">
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="cron_job_view">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">View cron job page
                                    </p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="cron_job_create">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Add cron job</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="cron_job_update">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Edit cron job</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="cron_job_rebuild">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Rebuild cron job
                                    </p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="cron_job_delete">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Delete cron job
                                    </p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div data-toggle="collapse" data-target="#php-cli" aria-expanded="false"
                            class="clearfix section-title collapsed">
                            <h4 class="pull-left"><img src="/media/svg/teams/php-cli.svg?75b5662c21d83ab35a9fd0c23bd65eaa"
                                alt="icon" data-nsfw-filter-status="sfw" style="visibility: visible;"> PHP CLI
                              
                            </h4> <i class="rc rc-ln-chevron-down pull-right"></i>
                          </div>
                          <ul id="php-cli" class="permission-list list-unstyled collapse" aria-expanded="false"
                            style="height: 0px;">
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="php_cli_view">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">View PHP CLI page
                                    </p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="php_cli_update">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Update PHP CLI</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div data-toggle="collapse" data-target="#deployment-key" aria-expanded="false"
                            class="clearfix section-title collapsed">
                            <h4 class="pull-left"><img src="/media/svg/teams/deployment-key.svg?17886f82c79b19535b2af59bf21d066b"
                                alt="icon" data-nsfw-filter-status="sfw" style="visibility: visible;"> Deployment Key
                              
                            </h4> <i class="rc rc-ln-chevron-down pull-right"></i>
                          </div>
                          <ul id="deployment-key" class="permission-list list-unstyled collapse" aria-expanded="false"
                            style="height: 0px;">
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="deployment_key_view">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">View deployment
                                      key page</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="deployment_key_manage">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Manage deployment
                                      key</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> Generate and
                                      regenerate deployment key</p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div data-toggle="collapse" data-target="#notification" aria-expanded="false"
                            class="clearfix section-title collapsed">
                            <h4 class="pull-left"><img src="/media/svg/teams/notification.svg?0231f18db8f38fa7c082a5c4cc9d93df"
                                alt="icon" data-nsfw-filter-status="sfw" style="visibility: visible;"> Notification
                              
                            </h4> <i class="rc rc-ln-chevron-down pull-right"></i>
                          </div>
                          <ul id="notification" class="permission-list list-unstyled collapse" aria-expanded="false"
                            style="height: 0px;">
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="notification_view">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">View notification
                                      page</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="notification_manage">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Manage
                                      notification</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> Add, update, delete
                                      Slack/Telegram notification</p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="notification_health_manage">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Manage health
                                      notification</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div data-toggle="collapse" data-target="#log" aria-expanded="false"
                            class="clearfix section-title collapsed">
                            <h4 class="pull-left"><img src="/media/svg/teams/log.svg?21ee15e7df3cb8077d75ea8c92dcc65d" alt="icon"
                                data-nsfw-filter-status="sfw" style="visibility: visible;"> Log
                              
                            </h4> <i class="rc rc-ln-chevron-down pull-right"></i>
                          </div>
                          <ul id="log" class="permission-list list-unstyled collapse" aria-expanded="false"
                            style="height: 0px;">
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="log_view">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">View log page</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div data-toggle="collapse" data-target="#services" aria-expanded="false"
                            class="clearfix section-title collapsed">
                            <h4 class="pull-left"><img src="/media/svg/teams/services.svg?6377138cc9353fdd94d8139e4b58508e"
                                alt="icon" data-nsfw-filter-status="sfw" style="visibility: visible;"> Services
                              
                            </h4> <i class="rc rc-ln-chevron-down pull-right"></i>
                          </div>
                          <ul id="services" class="permission-list list-unstyled collapse" aria-expanded="false"
                            style="height: 0px;">
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="services_view">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">View services page
                                    </p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="services_manage">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Manage services
                                    </p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> Start, stop, reload
                                      services</p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div data-toggle="collapse" data-target="#security" aria-expanded="false"
                            class="clearfix section-title collapsed">
                            <h4 class="pull-left"><img src="/media/svg/teams/security.svg?88a6786a61f6b1be34084d2976d1b1e1"
                                alt="icon" data-nsfw-filter-status="sfw" style="visibility: visible;"> Security
                              
                            </h4> <i class="rc rc-ln-chevron-down pull-right"></i>
                          </div>
                          <ul id="security" class="permission-list list-unstyled collapse" aria-expanded="false"
                            style="height: 0px;">
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="security_view">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">View security page
                                    </p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="security_create">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Add firewall rules
                                    </p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="security_deploy">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Deploy firewall
                                      rules</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="security_delete">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Delete firewall
                                      rules</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="ssh_tool_kick">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Kill SSH Session
                                    </p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="fail2ban_manual_ban">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Manual ban IP
                                      Addresses</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox"><label data-v-469e20da=""><input
                                      data-v-469e20da="" type="checkbox" name="fail2ban_delete">
                                    <p data-v-469e20da="" class="title" data-nsfw-filter-status="swf">Delete Fail2Ban
                                      blocked IP Address</p>
                                    <p data-v-469e20da="" class="sub" data-nsfw-filter-status="swf"> </p>
                                  </label>
                                  
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div> -->
                        <div>
                          <div
                            data-toggle="collapse"
                            data-target="#system-user"
                            aria-expanded="false"
                            class="clearfix section-title collapsed"
                          >
                            <h4 class="pull-left">
                              <img
                                src="/media/svg/teams/system-user.svg?eac0171f6722226fa36250dedf44f035"
                                alt="icon"
                                data-nsfw-filter-status="sfw"
                                style="visibility: visible"
                              />
                              System User
                            </h4>
                            <i class="rc rc-ln-chevron-down pull-right"></i>
                          </div>
                          <ul
                            id="system-user"
                            class="permission-list list-unstyled collapse"
                            aria-expanded="false"
                            style="height: 0px"
                          >
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox">
                                  <label data-v-469e20da=""
                                    ><input
                                      data-v-469e20da=""
                                      type="checkbox"
                                      name="system_user_view"
                                    />
                                    <p
                                      data-v-469e20da=""
                                      class="title"
                                      data-nsfw-filter-status="swf"
                                    >
                                      View system user page
                                    </p>
                                    <p
                                      data-v-469e20da=""
                                      class="sub"
                                      data-nsfw-filter-status="swf"
                                    ></p>
                                  </label>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox">
                                  <label data-v-469e20da=""
                                    ><input
                                      data-v-469e20da=""
                                      type="checkbox"
                                      name="system_user_create"
                                    />
                                    <p
                                      data-v-469e20da=""
                                      class="title"
                                      data-nsfw-filter-status="swf"
                                    >
                                      Add system user
                                    </p>
                                    <p
                                      data-v-469e20da=""
                                      class="sub"
                                      data-nsfw-filter-status="swf"
                                    ></p>
                                  </label>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox">
                                  <label data-v-469e20da=""
                                    ><input
                                      data-v-469e20da=""
                                      type="checkbox"
                                      name="system_user_change_password"
                                    />
                                    <p
                                      data-v-469e20da=""
                                      class="title"
                                      data-nsfw-filter-status="swf"
                                    >
                                      Change system user's password
                                    </p>
                                    <p
                                      data-v-469e20da=""
                                      class="sub"
                                      data-nsfw-filter-status="swf"
                                    ></p>
                                  </label>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox">
                                  <label data-v-469e20da=""
                                    ><input
                                      data-v-469e20da=""
                                      type="checkbox"
                                      name="system_user_delete"
                                    />
                                    <p
                                      data-v-469e20da=""
                                      class="title"
                                      data-nsfw-filter-status="swf"
                                    >
                                      Delete system user
                                    </p>
                                    <p
                                      data-v-469e20da=""
                                      class="sub"
                                      data-nsfw-filter-status="swf"
                                    ></p>
                                  </label>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <div
                            data-toggle="collapse"
                            data-target="#ssh-key"
                            aria-expanded="false"
                            class="clearfix section-title collapsed"
                          >
                            <h4 class="pull-left">
                              <img
                                src="/media/svg/teams/ssh-key.svg?7114582a08f8f681a5640b4fefea1f30"
                                alt="icon"
                                data-nsfw-filter-status="sfw"
                                style="visibility: visible"
                              />
                              SSH Key
                            </h4>
                            <i class="rc rc-ln-chevron-down pull-right"></i>
                          </div>
                          <ul
                            id="ssh-key"
                            class="permission-list list-unstyled collapse"
                            aria-expanded="false"
                            style="height: 0px"
                          >
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox">
                                  <label data-v-469e20da=""
                                    ><input
                                      data-v-469e20da=""
                                      type="checkbox"
                                      name="ssh_key_view"
                                    />
                                    <p
                                      data-v-469e20da=""
                                      class="title"
                                      data-nsfw-filter-status="swf"
                                    >
                                      View SSH key page
                                    </p>
                                    <p
                                      data-v-469e20da=""
                                      class="sub"
                                      data-nsfw-filter-status="swf"
                                    ></p>
                                  </label>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox">
                                  <label data-v-469e20da=""
                                    ><input
                                      data-v-469e20da=""
                                      type="checkbox"
                                      name="ssh_key_create"
                                    />
                                    <p
                                      data-v-469e20da=""
                                      class="title"
                                      data-nsfw-filter-status="swf"
                                    >
                                      Add SSH key
                                    </p>
                                    <p
                                      data-v-469e20da=""
                                      class="sub"
                                      data-nsfw-filter-status="swf"
                                    ></p>
                                  </label>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div data-v-469e20da="" class="form-group">
                                <div data-v-469e20da="" class="checkbox">
                                  <label data-v-469e20da=""
                                    ><input
                                      data-v-469e20da=""
                                      type="checkbox"
                                      name="ssh_key_delete"
                                    />
                                    <p
                                      data-v-469e20da=""
                                      class="title"
                                      data-nsfw-filter-status="swf"
                                    >
                                      Delete SSH key
                                    </p>
                                    <p
                                      data-v-469e20da=""
                                      class="sub"
                                      data-nsfw-filter-status="swf"
                                    ></p>
                                  </label>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="item">
                        <h4>Atomic Deployment Sharing Rules (Coming Soon)</h4>
                        <hr />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                <div class="panel panel-default">
                  <div class="panel-heading">
                    <h4>Create A Team</h4>
                    <p data-nsfw-filter-status="swf">
                      Create a team and select which permissions the members
                      inside this team have over your servers.
                    </p>
                  </div>
                  <div class="panel-body">
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
                    <button
                      data-v-69273b5e=""
                      type="submit"
                      class="btn btn-base btn-block"
                    >
                      <span
                        data-v-293d8245=""
                        data-v-69273b5e=""
                        data-nsfw-filter-status="swf"
                        ><span data-v-293d8245="" data-nsfw-filter-status="swf">
                          Add Team
                        </span></span
                      >
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/sass/pages/wizard/wizard-1.scss";
</style>

<script>
import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";
import KTUtil from "@/assets/js/components/util";

import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import Swal from "sweetalert2";
import ApiService from "@/core/services/api.service";

export default {
  name: "CreateTeam",
  data() {
    return {
      form: {
        name: "tingerval",
        address: "221.56.120.89",
        ssh: "22"
      }
      /*TeamType: "Team",
        commandValue: `mkdir -p /root/.ssh && touch /root/.ssh/authorized_keys && echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCvVRd/oYPD8IaK1NuIaGkOIV/zvISGrkeBL7XY967cOXgJf26Zr/60bEGYzcQKG1OpAa8g6PPH2skUIw1i3geR3/0atMU1Osj8hV9Z6WCxCFlfGOjmJGzuR+TT8EcgYegdBTE2zIPahajUHaAZTYljb7ewEugflOeh0sRpZ3BER83hu1a8xoibIn+UuSXEN3f++BSdxZNu7suGd46fBgWeUw`,
        warningText: `Your server needs to have a new unused installation of Ubuntu 16.04, 18.04 or 20.04 x64 and must contain a root user. 
                      To get started, add this public key to /root/.ssh/authorized_keys file.`*/
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      {
        title: "Team"
      },
      {
        title: "Create"
      }
    ]);
    this.fv = this.createValidation();
    this.fv.on("core.form.valid", this.submit);
    this.fv.on("core.form.invalid", () => {});
  },
  methods: {
    clickedItem: function(evt) {
      var childUL = null;
      // console.log(evt.target);  // == target object's innerhtml
      // console.log(evt.currentTarget.getAttribute('data-target'));
      // console.log(this);
      // console.log(KTUtil.addClass);
      if (evt.currentTarget.getAttribute("aria-expanded") == "true") {
        evt.currentTarget.setAttribute("aria-expanded", "false");
        KTUtil.addClass(evt.currentTarget, "collapsed");
        childUL = KTUtil.getById(
          evt.currentTarget.getAttribute("data-target").substring(1)
        );
        KTUtil.removeClass(childUL, "in");
        childUL.setAttribute("aria-expanded", "false");
        childUL.setAttribute("style", "height:0px;");
      } else {
        evt.currentTarget.setAttribute("aria-expanded", "true");
        KTUtil.removeClass(evt.currentTarget, "collapsed");
        childUL = KTUtil.getById(
          evt.currentTarget.getAttribute("data-target").substring(1)
        );
        KTUtil.addClass(childUL, "in");
        childUL.setAttribute("aria-expanded", "true");
        childUL.setAttribute("style", "");
      }
    },
    createValidation: function() {
      const create_form = KTUtil.getById("kt_form_server");
      return formValidation(create_form, {
        fields: {
          name: {
            validators: {
              notEmpty: {
                message: "Name is required"
              }
            }
          },
          address: {
            validators: {
              notEmpty: {
                message: "IP address is required"
              }
            }
          }
        },
        plugins: {
          trigger: new Trigger(),
          submitButton: new SubmitButton(),
          bootstrap: new Bootstrap()
        }
      });
    },
    makeToast(contents, variant = null) {
      this.$bvToast.toast(contents, {
        title: `Litegix`,
        toaster: "b-toaster-bottom-right",
        variant: variant,
        solid: true
      });
    },
    submit: function() {
      // set spinner to submit button
      const submitButton = this.$refs["kt_form_server_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");
      const removeSpinner = () => {
        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      };

      const payload = {
        name: this.form.name,
        provider: "other",
        web_server: "nginx",
        database: "mysql",
        address: this.form.address,
        php: "5.7",
        ssh: this.form.ssh
      };

      //console.log("createTeam", payload);
      ApiService.setHeader();
      ApiService.post("teams/create", payload)
        .then(({ data }) => {
          //console.log("createTeam-response", data);
          if (data.success) {
            this.onCreateSuccess(data);
          }
          removeSpinner();
        })
        .catch(error => {
          removeSpinner();
          if (error.response && error.response.data) {
            this.makeToast(error.response.data.message, "danger");
          } else {
            this.makeToast("There's something wrong", "danger");
          }
        });
    },
    onCreateSuccess(response) {
      //console.log("onCreateSuccess", response);
      Swal.fire({
        title: "",
        text: response.message,
        icon: "success",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false
      }).then(() => {
        this.$router.push({
          name: "server-config"
        });
      });
    }
  }
};
</script>
