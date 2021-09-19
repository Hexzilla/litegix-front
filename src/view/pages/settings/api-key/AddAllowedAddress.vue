<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Add IP Address</span
        >
      </h3>
    </div>
    <div class="card-body pt-0 pb-10">
      <b-form id="kt_form">
        <b-form-group label="IP Address">
          <b-form-input
            name="address"
            v-model="form.address"
            required
            placeholder="IPv4 Address"
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Description (Optional)">
          <b-form-input
            name="description"
            v-model="form.description"
            placeholder="E.g: Database server"
          ></b-form-input>
        </b-form-group>
        <button
          type="submit"
          class="btn btn-primary btn-block"
          ref="kt_form_submit"
        >
          Add Address
        </button>
      </b-form>
    </div>
  </div>
</template>

<script>
import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";
import KTUtil from "@/assets/js/components/util";

import { mapGetters } from "vuex";
import Swal from "sweetalert2";
import { ADD_ALLOWED_IP_ADDRESS } from "@/core/services/store/account.module";

export default {
  data() {
    return {
      form: {
        address: "",
        desciption: ""
      }
    };
  },
  computed: {
    ...mapGetters(["databaseusers"])
  },
  mounted() {
    const create_form = KTUtil.getById("kt_form");
    this.fv = formValidation(create_form, {
      fields: {
        name: {
          validators: {
            notEmpty: {
              message: "Name is required"
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
    this.fv.on("core.form.valid", this.createDatabase);
    this.fv.on("core.form.invalid", () => {});
  },
  methods: {
    createDatabase() {
      // set spinner to submit button
      const submitButton = this.$refs["kt_form_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");
      const removeSpinner = () => {
        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      };
      const payload = {
        address: this.form.address,
        description: this.form.description
      };
      this.$store
        .dispatch(ADD_ALLOWED_IP_ADDRESS, payload)
        .then(() => {
          removeSpinner();
          this.onCreateSuccess(payload.address);
        })
        .catch(() => {
          removeSpinner();
        });
    },
    onCreateSuccess(address) {
      Swal.fire({
        title: "",
        text: "Address " + address + " has been successfully added",
        icon: "success",
        confirmButtonClass: "btn btn-secondary",
        heightAuto: false
      }).then(() => {
        console.log();
        this.$router.push({
          name: "settings-apiKey"
        });
      });
    }
  }
};
</script>
