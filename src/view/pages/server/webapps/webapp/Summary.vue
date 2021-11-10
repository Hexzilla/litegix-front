<template>
  <div>
    <KTCard ref="summary" title="Summary">
      <template v-slot:body>
        <p class="font-size-md mt-1">
          You must place your Deployment Key into your git repository. You can
          get your deployment key in Deployment Key section.
        </p>
      </template>
    </KTCard>
  </div>
</template>

<style scoped src="@/assets/styles/server.css"></style>

<script>
import KTCard from "@/view/content/Card.vue";
import { makeSuccessToast, catchError } from "@/view/shared/msgbox";
import {
  GET_PHP_VERSION,
  UPDATE_PHP_VERSION
} from "@/core/services/store/system.module";

export default {
  components: {
    KTCard
  },
  data() {
    return {
      serverId: "",
      selectedVersion: "7.2",
      providers: ["Github", "GitLab", "Bitbucket", "Custom Git"]
    };
  },
  mounted() {
    this.serverId = this.$route.params.serverId;
    this.$store.dispatch(GET_PHP_VERSION, this.serverId).then(res => {
      console.log("PHPVersion", res);
      this.options = res.data.avaliable;
      this.selectedVersion = res.data.phpVersion;
    });
  },
  methods: {
    updateVersion(e) {
      e.preventDefault();
      console.log("updateVersion", this.selectedVersion);
      const payload = {
        serverId: this.serverId,
        phpVersion: this.selectedVersion
      };
      this.$store
        .dispatch(UPDATE_PHP_VERSION, payload)
        .then(phpVersion => {
          console.log("PHP version is updated", phpVersion);
          makeSuccessToast(this, "PHP version has been updated.");
        })
        .catch(catchError);
    }
  }
};
</script>
