<template>
<div>
    <!--begin::Card-->
    <div class="card card-custom">
        <!--begin::Header-->
        <div class="card-header py-3">
            <div class="card-title align-items-start flex-column">
                <h1 class="font-weight-bolder text-dark">
                    API Key
                </h1>
                <p class="text-muted font-weight-bold font-size-sm mt-1">
                    You can use this API Key and API Secret to download your backup. To enable RunCloud API access, you need to enable API Access.
                </p>
            </div>
        </div>
        <div class="card-body">
            <v-row>
                <b-input-group class="mt-3">
                    <label class="w-100">API Key</label>
                    <b-form-input auto="true" characters="characters" class="form-control form-control-lg" type="text" :value="apikey">
                    </b-form-input>
                    <b-input-group-append>
                        <b-button variant="dark" v-clipboard:copy="password">
                            <i class="fa fa-copy"></i>
                        </b-button>
                        <b-button variant="success" @click="generate()"><i class="fa fa-sync"></i></b-button>
                    </b-input-group-append>
                </b-input-group>
            </v-row>
            <v-row>
                <b-input-group class="mt-3">
                    <label class="w-100">API Secret</label>
                    <b-form-input auto="true" characters="characters" class="form-control form-control-lg" type="text" :value="apikey">
                    </b-form-input>
                    <b-input-group-append>
                        <b-button variant="dark" v-clipboard:copy="password">
                            <i class="fa fa-copy"></i>
                        </b-button>
                        <b-button variant="success" @click="generate()"><i class="fa fa-sync"></i></b-button>
                    </b-input-group-append>
                </b-input-group>
            </v-row>
        </div>
    </div>
    <!--end::Card-->
    <div class="form-group row mt-12"></div>
    <!--begin::Card-->
    <div class="card card-custom">
        <!--begin::Header-->
        <div class="card-header py-3">
            <div class="card-title align-items-start flex-column">
                <h1 class="font-weight-bolder text-dark">
                    Enable API Access
                </h1>
                <p class="text-muted font-weight-bold font-size-sm mt-1">
                    Enable API Access to use the RunCloud API endpoint. If you are only using the API Key and API Secret to download backups, you don't have to enable this.
                </p>
            </div>
        </div>
        <div class="card-body">
            <v-row>
                <v-select dense outlined label="select">
                </v-select>
            </v-row>
        </div>
    </div>
    <!--end::Card-->
    <div class="form-group row mt-12"></div>
    <!--begin::Card-->
    <div class="card card-custom">
        <!--begin::Header-->
        <v-card-title>
            <h1>IP Address Restriction</h1>
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="search" label="Search..." single-line hide-details></v-text-field>
        </v-card-title>
        
        <div class="card-body">
            <p class="text-muted font-weight-bold font-size-sm mt-1">
            Any requests to the API endpoint can only be made from these IP Address(es). If no IP Address is added and API Access is enabled, your API Key and API Secret can be requested from any IP address.
        </p>
            <form class="form">
                <div class="form-group row mb-2">
                    <label class="col-xl-12 col-lg-12 col-form-label text-left">IP Address</label>
                    <b-form-input ref="ipAddress" class="form-control form-control-lg" type="text" placeholder="IPV4 Address">
                    </b-form-input>
                </div>

                <div class="form-group row mb-2">
                    <label class="col-xl-12 col-lg-12 col-form-label text-left">Description(Optional)</label>
                    <b-form-input ref="des" class="form-control form-control-lg" type="text" placeholder="E.g: automation server">
                    </b-form-input>
                </div>
                <div class="form-group row mb-2">
                    <button type="button" class="btn btn-dark w-100" @click="add()" ref="kt_ip_add">
                        Add
                    </button>
                </div>
            </form>
            <div>
                <h2 class="text--lighten-1 font-size-sm mt-8">
                    Allowed IP Address(es)
                </h2>
            </div>
            <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table>
        </div>
    </div>
</div>
<!--end::Card-->
</template>

<script>
import {
    UPDATE_PERSONAL_INFO
} from "@/core/services/store/profile.module";
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueClipboard)

export default {
    name: "Authentication",
    data() {
        return {
            search: '',
            headers: [{
                    text: 'IP Address',
                    align: 'left',
                    sortable: false,
                    value: 'ipAddress',
                },
                {
                    text: 'Description',
                    value: 'desc'
                },
                {
                    text: 'Delete',
                    value: 'del'
                },
            ],
            desserts: []
        };
    },
    props: {
        type: {
            type: String,
            default: 'text'
        },
        size: {
            type: String,
            default: '26'
        },
        characters: {
            type: String,
            default: 'a-z,A-Z,0-9'
        },
        auto: [String, Boolean],
        apikey: {
            type: String,
            default: ''
        },
    },
    mounted: function () {
        this.generate();
    },

    methods: {
        generate() {
            let charactersArray = this.characters.split(',');
            let CharacterSet = '';
            let key = '';
            if (charactersArray.indexOf('a-z') >= 0) {
                CharacterSet += 'abcdefghijklmnopqrstuvwxyz';
            }
            if (charactersArray.indexOf('A-Z') >= 0) {
                CharacterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            }
            if (charactersArray.indexOf('0-9') >= 0) {
                CharacterSet += '0123456789';
            }
            // if (charactersArray.indexOf('#') >= 0) {
            //     CharacterSet += '![]{}()%&*$#^<>~@|';
            // }

            for (let i = 0; i < this.size; i++) {
                key += CharacterSet.charAt(Math.floor(Math.random() * CharacterSet.length));
            }
            this.apikey = key;
        },

        setChangePassLength() {
            this.generate();
        },

        add() {
            var ipAddress = this.$refs.ipAddress.value;
            var des = this.$refs.des.value;

            // set spinner to submit button
            const submitButton = this.$refs["kt_ip_add"];
            submitButton.classList.add("spinner", "spinner-light", "spinner-right");

            // dummy delay
            setTimeout(() => {
                // send update request
                this.$store.dispatch(UPDATE_PERSONAL_INFO, {
                    ipAddress,
                    des
                });

                submitButton.classList.remove(
                    "spinner",
                    "spinner-light",
                    "spinner-right"
                );
            }, 2000);
        }
    }
};
</script>
