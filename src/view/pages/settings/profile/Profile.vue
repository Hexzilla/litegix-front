<template>
  <div>
    <div>
      <PersonalInformation></PersonalInformation>
    </div>
    <div class="mt-8">
      <CompanyInformation></CompanyInformation>
    </div>
  </div>
</template>

<script>
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import PersonalInformation from "./PersonalInformation.vue";
import CompanyInformation from "./CompanyInformation.vue";

export default {
  name: "KTProfile",
  components: {
    PersonalInformation,
    CompanyInformation
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings" },
      { title: "Profile" }
    ]);
  }
};
</script>
