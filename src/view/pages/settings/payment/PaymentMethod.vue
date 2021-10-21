<template>
  <div class="card card-custom">
    <div class="card-header py-3">
      <div class="card-title align-items-start flex-column">
        <h3 class="card-label font-weight-bolder text-dark">
          Payment Methods
        </h3>
        <span class="text-muted font-size-sm mt-1"
          >Add or remove your payment methods</span
        >
      </div>
      <div class="card-toolbar">
        <b-link to="paymentmethod/new">
          <a class="btn btn-primary mr-2">Add New Payment Method</a>
        </b-link>
      </div>
    </div>
    <div class="card-body">
      <div class="mb-8">
        <span class="font-size-lg">
          The default payment method will be used for any billing purposes. You
          may add up to five (5) payment methods here.
        </span>
      </div>
      <div class="overflow-auto">
        <b-table
          :items="payments"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
          show-empty
          empty-text="You don't have any payment method yet."
        >
          <template #cell(options)="data">
            <b-link @click="deleteChannel($event, data.item)">
              <a
                class="btn btn-sm btn-icon btn-light-primay mr-2"
                v-b-tooltip.hover.top="'Delete'"
              >
                <i class="flaticon2-trash"></i>
              </a>
            </b-link>
            <b-link @click="editChannel($event, data.item)">
              <a
                class="btn btn-sm btn-icon btn-light-primay mr-2"
                v-b-tooltip.hover.top="'Edit'"
              >
                <i class="flaticon2-edit"></i>
              </a>
            </b-link>
          </template>
        </b-table>
        <b-pagination
          class="float-right"
          v-model="currentPage"
          :total-rows="payments.length"
          :per-page="perPage"
          aria-controls="my-table"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { showSuccessMsgbox, showConfirmMsgbox } from "@/view/shared/msgbox";
import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
import {
  GET_PAYMENT_METHODS,
  DELETE_CHANNEL
} from "@/core/services/store/account.module";

export default {
  name: "Channels",
  data() {
    return {
      payments: [],
      fields: ["name", "expire"],
      currentPage: 1,
      perPage: 10
    };
  },
  mounted() {
    this.$store.dispatch(SET_BREADCRUMB, [
      { title: "Settings", route: "profile" },
      { title: "Notification" }
    ]);
    this.$store.dispatch(GET_PAYMENT_METHODS).then(payments => {
      console.log("this.payments", payments);
      this.payments = payments;
    });
  },
  methods: {
    async deleteChannel(e, channel) {
      e.preventDefault();
      console.log("deleteChannel", channel);

      const result = await showConfirmMsgbox(
        `Do you want to delete this channel: ${channel.name}?`
      );
      if (!result.isConfirmed) {
        return;
      }

      const respone = await this.$store.dispatch(DELETE_CHANNEL, channel.id);
      console.log("delete-respone", respone);
      if (respone && respone.success) {
        await showSuccessMsgbox(
          `Notification channel ${channel.name} has been successfully deleted`
        );
        const index = this.channels.indexOf(channel);
        if (index >= 0) {
          this.channels.splice(index, 1);
        }
      }
    },
    async editChannel(e, channel) {
      e.preventDefault();
      console.log("editChannel", channel);
      this.$router.push({
        path: `/settings/notification/channel/edit/${channel.id}`
      });
    }
  }
};
</script>
