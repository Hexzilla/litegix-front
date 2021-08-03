<template>
  <div>
    <div>
      <Newsletter></Newsletter>
    </div>
    <div class="mt-8">
      <Channels></Channels>
    </div>
  </div>
</template>

<script>
import Newsletter from "./Newsletter.vue";
import Channels from "./Channels.vue";

export default {
  name: "Account",
  components: {
    Newsletter,
    Channels
  }
};
</script>
