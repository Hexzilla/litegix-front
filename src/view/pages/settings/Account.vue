<template>
  <div>
    <!--begin::Card-->
    <div class="card card-custom">
      <!--begin::Header-->
      <div class="card-header py-3">
        <div class="card-title align-items-start flex-column">
          <h3 class="card-label font-weight-bolder text-dark">
            My Profile
          </h3>
          <span class="text-muted font-weight-bold font-size-sm mt-1"
            >To change your email address, please open a support ticket.</span
          >
        </div>
        <div class="card-toolbar">
          <button
            type="reset"
            class="btn btn-success mr-2"
            @click="save()"
            ref="kt_save_changes"
          >
            Save Changes
          </button>
          <button type="reset" class="btn btn-secondary" @click="cancel()">
            Cancel
          </button>
        </div>
      </div>
      <!--end::Header-->
      <!--begin::Form-->
      <form class="form">
        <!--begin::Body-->
        <div class="card-body">
          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 col-form-label text-right"
              >Email</label
            >
            <div class="col-lg-9 col-xl-6">
              <input
                ref="email"
                class="form-control form-control-lg form-control-solid"
                type="text"
                disabled
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 col-form-label text-right"
              >Name</label
            >
            <div class="col-lg-9 col-xl-6">
              <input
                ref="name"
                class="form-control form-control-lg form-control-solid"
                type="text"
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 col-form-label text-right"
              >Time Zone</label
            >
            <div class="col-lg-9 col-xl-6">
              <select
                class="form-control form-control-lg form-control-solid"
                ref="time_zone"
              >
                <template v-for="(item, i) in time_zones">
                  <option
                    v-bind:key="i"
                    :value="item"
                    :selected="
                      currentUserAccountInfo.time_zone == item ? true : false
                    "
                    >{{ item }}</option
                  >
                </template>
              </select>
            </div>
          </div>
          <div class="form-group row align-items-center">
            <label class="col-xl-3 col-lg-3 col-form-label text-right"></label>
            <div class="col-lg-9 col-xl-6">
              <div class="checkbox-inline">
                <label class="checkbox">
                  <input
                    type="checkbox"
                    ref="email_com"
                    :checked="currentUserAccountInfo.email"
                  /><span></span> Login Email Notification</label
                >
              </div>
            </div>
          </div>
        </div>
        <!--end::Body-->
      </form>
      <!--end::Form-->
    </div>
    <div class="form-group row"></div>
    <div class="card card-custom">
      <!--begin::Header-->
      <div class="card-header py-3">
        <div class="card-title align-items-start flex-column">
          <h3 class="card-label font-weight-bolder text-dark">
            Company Details
          </h3>
          <span class="text-muted font-weight-bold font-size-sm mt-1"
            >If you are representing your company, fill in the form here to get invoice under your company name.</span
          >
        </div>
        <div class="card-toolbar">
          <button
            type="reset"
            class="btn btn-success mr-2"
            @click="save()"
            ref="kt_save_changes"
          >
            Save Changes
          </button>
          <button type="reset" class="btn btn-secondary" @click="cancel()">
            Cancel
          </button>
        </div>
      </div>
      <!--end::Header-->
      <!--begin::Form-->
      <form class="form">
        <!--begin::Body-->
        <div class="card-body">
          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 col-form-label text-right"
              >Company Name</label
            >
            <div class="col-lg-9 col-xl-6">
              <input
                ref="CompanyName"
                class="form-control form-control-lg form-control-solid"
                type="text"
                placeholder="Your company name"
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 col-form-label text-right"
              >Address Line 1</label
            >
            <div class="col-lg-9 col-xl-6">
              <input
                ref="AddressLine1"
                class="form-control form-control-lg form-control-solid"
                type="text"
                placeholder="Building address"
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 col-form-label text-right"
              >Address Line 2</label
            >
            <div class="col-lg-9 col-xl-6">
              <input
                ref="AddressLine2"
                class="form-control form-control-lg form-control-solid"
                type="text"
                placeholder="Street address"
              />
            </div>
          </div>

          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 col-form-label text-right"
              >City</label
            >
            <div class="col-lg-9 col-xl-3">
              <input
                ref="City"
                class="form-control form-control-lg form-control-solid"
                type="text"
                placeholder="City"
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 col-form-label text-right"
              >Postal Code</label
            >
            <div class="col-lg-9 col-xl-3">
              <input
                ref="PostalCode"
                class="form-control form-control-lg form-control-solid"
                type="text"
                placeholder="Zip/Postal Code"
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 col-form-label text-right"
              >State</label
            >
            <div class="col-lg-9 col-xl-6">
              <input
                ref="State"
                class="form-control form-control-lg form-control-solid"
                type="text"
                placeholder="State/Province"
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 col-form-label text-right"
              >Country</label
            >
            <div class="col-lg-9 col-xl-6">
              <select
                class="form-control form-control-lg form-control-solid"
                ref="Country"
              >
              </select>
            </div>
          </div>

          <div class="form-group row">
            <label class="col-xl-3 col-lg-3 col-form-label text-right"
              >Tax/VAT/GST Number</label
            >
            <div class="col-lg-9 col-xl-6">
              <input
                ref="Tax"
                class="form-control form-control-lg form-control-solid"
                type="text"
                placeholder="Tax/VAT/GST Number"
              />
            </div>
          </div>
        </div>
        <!--end::Body-->
      </form>
      <!--end::Form-->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { UPDATE_PERSONAL_INFO } from "@/core/services/store/profile.module";

export default {
  name: "Account",
  data() {
    return {
      default_photo: "media/users/blank.png",
      current_photo: null,
      time_zones: [
        "(GMT-11:00) International Date Line West",
        "(GMT-11:00) Midway Island",
        "(GMT-11:00) Samoa",
        "(GMT-10:00) Hawaii",
        "(GMT-08:00) Alaska",
        "(GMT-07:00) Pacific Time (US & Canada)",
        "(GMT-07:00) Tijuana",
        "(GMT-07:00) Arizona",
        "(GMT-06:00) Mountain Time (US & Canada)",
        "(GMT-06:00) Chihuahua",
        "(GMT-06:00) Mazatlan",
        "(GMT-06:00) Saskatchewan",
        "(GMT-06:00) Central America",
        "(GMT-05:00) Central Time (US & Canada)",
        "(GMT-05:00) Guadalajara",
        "(GMT-05:00) Mexico City",
        "(GMT-05:00) Monterrey",
        "(GMT-05:00) Bogota",
        "(GMT-05:00) Lima",
        "(GMT-05:00) Quito",
        "(GMT-04:00) Eastern Time (US & Canada)",
        "(GMT-04:00) Indiana (East)",
        "(GMT-04:00) Caracas",
        "(GMT-04:00) La Paz",
        "(GMT-04:00) Georgetown",
        "(GMT-03:00) Atlantic Time (Canada)",
        "(GMT-03:00) Santiago",
        "(GMT-03:00) Brasilia",
        "(GMT-03:00) Buenos Aires",
        "(GMT-02:30) Newfoundland",
        "(GMT-02:00) Greenland",
        "(GMT-02:00) Mid-Atlantic",
        "(GMT-01:00) Cape Verde Is.",
        "(GMT) Azores",
        "(GMT) Monrovia",
        "(GMT) UTC",
        "(GMT+01:00) Dublin",
        "(GMT+01:00) Edinburgh",
        "(GMT+01:00) Lisbon",
        "(GMT+01:00) London",
        "(GMT+01:00) Casablanca",
        "(GMT+01:00) West Central Africa",
        "(GMT+02:00) Belgrade",
        "(GMT+02:00) Bratislava",
        "(GMT+02:00) Budapest",
        "(GMT+02:00) Ljubljana",
        "(GMT+02:00) Prague",
        "(GMT+02:00) Sarajevo",
        "(GMT+02:00) Skopje",
        "(GMT+02:00) Warsaw",
        "(GMT+02:00) Zagreb",
        "(GMT+02:00) Brussels",
        "(GMT+02:00) Copenhagen",
        "(GMT+02:00) Madrid",
        "(GMT+02:00) Paris",
        "(GMT+02:00) Amsterdam",
        "(GMT+02:00) Berlin",
        "(GMT+02:00) Bern",
        "(GMT+02:00) Rome",
        "(GMT+02:00) Stockholm",
        "(GMT+02:00) Vienna",
        "(GMT+02:00) Cairo",
        "(GMT+02:00) Harare",
        "(GMT+02:00) Pretoria",
        "(GMT+03:00) Bucharest",
        "(GMT+03:00) Helsinki",
        "(GMT+03:00) Kiev",
        "(GMT+03:00) Kyiv",
        "(GMT+03:00) Riga",
        "(GMT+03:00) Sofia",
        "(GMT+03:00) Tallinn",
        "(GMT+03:00) Vilnius",
        "(GMT+03:00) Athens",
        "(GMT+03:00) Istanbul",
        "(GMT+03:00) Minsk",
        "(GMT+03:00) Jerusalem",
        "(GMT+03:00) Moscow",
        "(GMT+03:00) St. Petersburg",
        "(GMT+03:00) Volgograd",
        "(GMT+03:00) Kuwait",
        "(GMT+03:00) Riyadh",
        "(GMT+03:00) Nairobi",
        "(GMT+03:00) Baghdad",
        "(GMT+04:00) Abu Dhabi",
        "(GMT+04:00) Muscat",
        "(GMT+04:00) Baku",
        "(GMT+04:00) Tbilisi",
        "(GMT+04:00) Yerevan",
        "(GMT+04:30) Tehran",
        "(GMT+04:30) Kabul",
        "(GMT+05:00) Ekaterinburg",
        "(GMT+05:00) Islamabad",
        "(GMT+05:00) Karachi",
        "(GMT+05:00) Tashkent",
        "(GMT+05:30) Chennai",
        "(GMT+05:30) Kolkata",
        "(GMT+05:30) Mumbai",
        "(GMT+05:30) New Delhi",
        "(GMT+05:30) Sri Jayawardenepura",
        "(GMT+05:45) Kathmandu",
        "(GMT+06:00) Astana",
        "(GMT+06:00) Dhaka",
        "(GMT+06:00) Almaty",
        "(GMT+06:00) Urumqi",
        "(GMT+06:30) Rangoon",
        "(GMT+07:00) Novosibirsk",
        "(GMT+07:00) Bangkok",
        "(GMT+07:00) Hanoi",
        "(GMT+07:00) Jakarta",
        "(GMT+07:00) Krasnoyarsk",
        "(GMT+08:00) Beijing",
        "(GMT+08:00) Chongqing",
        "(GMT+08:00) Hong Kong",
        "(GMT+08:00) Kuala Lumpur",
        "(GMT+08:00) Singapore",
        "(GMT+08:00) Taipei",
        "(GMT+08:00) Perth",
        "(GMT+08:00) Irkutsk",
        "(GMT+08:00) Ulaan Bataar",
        "(GMT+09:00) Seoul",
        "(GMT+09:00) Osaka",
        "(GMT+09:00) Sapporo",
        "(GMT+09:00) Tokyo",
        "(GMT+09:00) Yakutsk",
        "(GMT+09:30) Darwin",
        "(GMT+09:30) Adelaide",
        "(GMT+10:00) Canberra",
        "(GMT+10:00) Melbourne",
        "(GMT+10:00) Sydney",
        "(GMT+10:00) Brisbane",
        "(GMT+10:00) Hobart",
        "(GMT+10:00) Vladivostok",
        "(GMT+10:00) Guam",
        "(GMT+10:00) Port Moresby",
        "(GMT+10:00) Solomon Is.",
        "(GMT+11:00) Magadan",
        "(GMT+11:00) New Caledonia",
        "(GMT+12:00) Fiji",
        "(GMT+12:00) Kamchatka",
        "(GMT+12:00) Marshall Is.",
        "(GMT+12:00) Auckland",
        "(GMT+12:00) Wellington",
        "(GMT+13:00) Nuku'alofa"
      ]
    };
  },
  mounted() {
    console.log("Account", this.currentUserAccountInfo);
    this.current_photo = this.currentUserPersonalInfo.photo;
  },
  methods: {
    save() {
      var name = this.$refs.name.value;
      var surname = this.$refs.surname.value;
      var company_name = this.$refs.company_name.value;
      var phone = this.$refs.phone.value;
      var email = this.$refs.email.value;
      var company_site = this.$refs.company_site.value;
      var photo = this.photo;

      // set spinner to submit button
      const submitButton = this.$refs["kt_save_changes"];
      submitButton.classList.add("spinner", "spinner-light", "spinner-right");

      // dummy delay
      setTimeout(() => {
        // send update request
        this.$store.dispatch(UPDATE_PERSONAL_INFO, {
          name,
          surname,
          company_name,
          phone,
          email,
          company_site,
          photo
        });

        submitButton.classList.remove(
          "spinner",
          "spinner-light",
          "spinner-right"
        );
      }, 2000);
    },
    cancel() {
      this.$refs.name.value = this.currentUserPersonalInfo.name;
      this.$refs.surname.value = this.currentUserPersonalInfo.surname;
      this.$refs.company_name.value = this.currentUserPersonalInfo.company_name;
      this.$refs.phone.value = this.currentUserPersonalInfo.phone;
      this.$refs.email.value = this.currentUserPersonalInfo.email;
      this.$refs.company_site.value = this.currentUserPersonalInfo.company_site;
      this.current_photo = this.currentUserPersonalInfo.photo;
    },
    onFileChange(e) {
      const file = e.target.files[0];

      if (typeof FileReader === "function") {
        const reader = new FileReader();

        reader.onload = event => {
          this.current_photo = event.target.result;
        };

        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    }
  },
  computed: {
    ...mapGetters(["currentUserPersonalInfo", "currentUserAccountInfo"]),
    photo() {
      return this.current_photo == null
        ? this.default_photo
        : this.current_photo;
    }
  }
};
</script>
