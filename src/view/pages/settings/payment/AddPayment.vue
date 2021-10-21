<template>
  <div class="card card-custom gutter-b">
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark">
          Add a New Payment Method
        </span>
      </h3>
    </div>
    <div class="card-body pt-0 pb-10">
      <form class="form" id="kt_form_payment_method">
        <b-form-group label="Name on Card">
          <b-form-input
            name="name"
            v-model="payload.name"
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Country">
          <b-form-select
            name="country"
            v-model="payload.country"
            :options="countries"
          ></b-form-select>
        </b-form-group>
        <b-form-group label="Postcode">
          <b-form-input
            name="postcode"
            v-model="payload.postcode"
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Card Number">
          <b-form-input
            name="cardNumber"
            v-model="payload.cardNumber"
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Expiration Date">
          <b-form-input
            name="expire"
            v-model="payload.expire"
            placeholder=""
          ></b-form-input>
        </b-form-group>
        <b-form-group label="CVC/CVV">
          <b-form-input
            name="cvc"
            v-model="payload.cvc"
            placeholder=""
          ></b-form-input>
        </b-form-group>
      </form>

      <button
        class="btn btn-primary btn-block"
        ref="kt_form_submit"
        @click="submit($event)"
      >
        Add Payment Method
      </button>
    </div>
  </div>
</template>

<script>
import formValidation from "@/assets/plugins/formvalidation/dist/es6/core/Core";
import validators from "@/assets/plugins/formvalidation/dist/es6/validators";
import Trigger from "@/assets/plugins/formvalidation/dist/es6/plugins/Trigger";
import Bootstrap from "@/assets/plugins/formvalidation/dist/es6/plugins/Bootstrap";
import SubmitButton from "@/assets/plugins/formvalidation/dist/es6/plugins/SubmitButton";
import KTUtil from "@/assets/js/components/util";
import { showSuccessMsgbox, catchError } from "@/view/shared/msgbox";
import { Countries } from "../../../shared/constants";
import { ADD_PAYMENT_METHOD } from "@/core/services/store/account.module";

export default {
  data() {
    return {
      countries: Countries,
      payload: {
        name: "",
        country: "",
        postcode: "",
        cardNumber: "",
        expire: "",
        cvc: ""
      }
    };
  },
  mounted() {
    this.initFormValidation();
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.fv.validate();
    },
    addPaymentMethod() {
      console.log("addPaymentMethod");
      const submitButton = this.$refs["kt_form_submit"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      this.$store
        .dispatch(ADD_PAYMENT_METHOD, this.payload)
        .then(data => {
          if (!data.success) {
            throw new Error(data.errors.message);
          }
          return showSuccessMsgbox(
            `Payment method ${this.payload.name} has been successfully added`
          );
        })
        .then(() => {
          this.$router.push({
            path: `/settings/paymentmethod`
          });
        })
        .catch(catchError)
        .finally(() => {
          submitButton.classList.remove(
            "spinner",
            "spinner-light",
            "spinner-right"
          );
        });
    },
    initFormValidation() {
      const form = KTUtil.getById("kt_form_payment_method");
      this.fv = formValidation(form, {
        fields: {
          name: {
            validators: {
              notEmpty: {
                message: "This name is required"
              }
            }
          },
          country: {
            validators: {
              notEmpty: {
                message: "This country is required"
              }
            }
          },
          postcode: {
            validators: {
              notEmpty: {
                message: "This postcode is required"
              },
              zipCode: {
                country: function() {
                  return form.querySelector('[name="country"]').value;
                },
                message: "Your postcode is not valid"
              }
            }
          },
          cardNumber: {
            validators: {
              notEmpty: {
                message: "This card number is required"
              },
              callback: {
                message: "The credit card number is not valid",
                callback: function(input) {
                  const value = input.value;
                  if (value === "") {
                    return true;
                  }

                  // Check if the input is valid credit card number
                  const result = validators.creditCard().validate({
                    value: value
                  });
                  if (!result.valid) {
                    return false;
                  } else {
                    let currentType = null;
                    switch (result.meta.type) {
                      case "MASTERCARD":
                      case "DINERS_CLUB_US":
                        // Master is the value of Master card in the select box
                        currentType = "Master";
                        break;

                      case "VISA":
                        // Visa is the value of Visa card in the select box
                        currentType = "Visa";
                        break;
                    }

                    // Get the selected type
                    if (currentType !== "Master" && currentType !== "Visa") {
                      return {
                        valid: false,
                        message: "Sorry, we only accept Visa or Mastercard"
                      };
                    }
                  }

                  return true;
                }
              }
            }
          },
          expire: {
            validators: {
              notEmpty: {
                message: "This expiration date is required"
              }
            }
          },
          cvc: {
            validators: {
              notEmpty: {
                message: "This field is required"
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

      form
        .querySelector('[name="country"]')
        .addEventListener("change", function() {
          // Revalidate the postal code field whenever user changes the country
          this.fv.revalidateField("postcode");
        });

      this.fv.on("core.form.valid", this.addPaymentMethod);
      this.fv.on("core.form.invalid", () => {});
    }
  }
};
</script>
