<template>
  <v-app>
    <v-card>
      <b-row no-gutters>
        <b-col md="6">
          <b-card-body title="Most reliable backup and restore tool">
            <b-card-text>
              Easily backup, restore, migrate your most important web
              application data in one seamless workflow without leaving RunCloud
            </b-card-text>

            <!-- <b-link to="/Backups/create"> -->
            <b-button to="Backups/create">Backup your first site</b-button>
            <!-- </b-link> -->
            <br /><br /><br />
            <div>
              <ul class="list-unstyled">
                <b-media tag="li">
                  <template v-slot:aside>
                    <span class="svg-icon svg-icon-xl svg-icon-primary">
                      <inline-svg
                        src="/media/svg/icons/Code/Time-schedule.svg"
                      />
                    </span>
                  </template>
                  <h5 class="mt-0 mb-1">Backup both web apps and database</h5>
                  <p class="mb-0">
                    Suitable for WordPress based application. You can also
                    exclude files that you don't want to backup.
                  </p>
                </b-media>

                <b-media tag="li" class="my-4">
                  <template v-slot:aside>
                    <span class="svg-icon svg-icon-xl svg-icon-primary">
                      <inline-svg src="/media/svg/icons/Home/Library.svg" />
                    </span>
                  </template>

                  <h5 class="mt-0 mb-1">Incremental backup</h5>
                  <p class="mb-0">
                    Intelligent backups that only sync any changes on your
                    sites. No need to fully backup your site again.
                  </p>
                </b-media>

                <b-media tag="li">
                  <template v-slot:aside>
                    <span class="svg-icon svg-icon-xl svg-icon-primary">
                      <inline-svg src="/media/svg/icons/Files/Download.svg" />
                    </span>
                  </template>

                  <h5 class="mt-0 mb-1">Restore and download</h5>
                  <p class="mb-0">
                    Restore to existing or new sites or download your backup.
                  </p>
                </b-media>
              </ul>
            </div>
          </b-card-body>
        </b-col>
        <b-col md="6">
          <b-card-img
            src="/media/products/22.png"
            class="rounded-0"
          ></b-card-img>
        </b-col>
      </b-row>
    </v-card>
  </v-app>
</template>
<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";

export default {
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Backups" }]);
  }
};
</script>
