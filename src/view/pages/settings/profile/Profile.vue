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
import PersonalInformation from "./PersonalInformation.vue";
import CompanyInformation from "./CompanyInformation.vue";

export default {
  name: "KTProfile",
  components: {
    PersonalInformation,
    CompanyInformation
  }
};
</script>
