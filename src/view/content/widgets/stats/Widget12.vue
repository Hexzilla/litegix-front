<template>
  <v-card
    class="mt-4 mx-auto"
    max-width="800"
  >
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="12"
      max-width="calc(100% - 32px)"
    >
      <v-sparkline
        :labels="labels"
        :value="value"
        color="white"
        line-width="2"
        padding="16"
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="text-h6 font-weight-light mb-2">
        CREDIT
      </div>
      <div class="subheading font-weight-light grey--text">
        TOTAL EARNED
      </div>
      <div class="subheading font-weight-light grey--text">
        CLAIM
      </div>
      <v-divider class="my-2"></v-divider>
      <v-card-actions>
      <span class="text-caption grey--text font-weight-light">UNCLAIMED</span>
      <v-spacer></v-spacer>
       <span
            class="
              btn btn-success btn-xs
              v-chip v-chip--label
              v-size--x-small
            "
            id="show-btn"
            @click="showModal"
          >
            Cash Out
          </span>
          <confirm-dialogue ref="confirmDialogue"></confirm-dialogue>
      <!-- <span class="text-caption grey--text font-weight-light">last registration 26 minutes ago</span> -->
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>
<style>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>
<script>
import ConfirmDialogue from "@/view/content/widgets/dialogue/ConfirmDialogue.vue";
  export default {
    components: {
      ConfirmDialogue
    },
    data: () => ({
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ],
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240,
      ],
    }),
    methods: {
      async showModal() {
        const ok = await this.$refs.confirmDialogue.show({
          title: "Cash Out",
          message:
            "Your unclaimed rewards will be reset to $0.00 after you click Request Cash Out button. Cash out request will be processed not more than 7 days. You won't receive full cash out rewards bacause PayPal will take some for processing fees.",
          okButton: "Cast Out"
        });
        // If you throw an error, the method will terminate here unless you surround it wil try/catch
        if (ok) {
          alert("You have successfully delete this page.");
        } else {
          // alert('You chose not to delete this page. Doing nothing now.')
        }
      }
    }
  }
</script>
