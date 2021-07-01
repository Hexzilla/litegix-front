<template>
<div class="row">
    <div class="col-xl-9 col-lg-9 col-md-7 col-sm-7">
        <div>
            <h1>Create subscription</h1>
            <h4>1 Customize your own plan</h4>
        </div>
        <v-card>
            <div class="card-body">

                <v-container>
                    <div>
                        <div class="row">
                            <div class="col-xl-10 col-lg-10 col-md-8 col-sm-8">
                                <v-card-title>
                                    Server
                                </v-card-title>
                                <h6>Label</h6>
                                <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" required dense outlined></v-select>
                                <v-spacer></v-spacer>
                            </div>
                            <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4">

                            </div>
                        </div>
                    </div>

                    <h6>Label</h6>
                    <v-text-field dense placeholder="Label for this API Key" outlined :rules="nameRules" required></v-text-field>
                    <h5>Service</h5>
                    <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" required dense outlined></v-select>
                    <h6>Username/Email/KeyId</h6>
                    <v-text-field dense placeholder="API Username/Email" outlined :rules="emailRules" required></v-text-field>
                    <h6>Secret</h6>
                    <p>You can create API Key for Cloudflare by using this URL: <a href="#"> https://www.cloudflare.com/a/profile</a></p>
                    <v-text-field dense placeholder="xxxx..." outlined :rules="nameRules" required></v-text-field>
                    <b-btn class="btn btn-dark" block @click="addKey" ref="topUpCredit">Add API Key</b-btn>
                </v-container>
            </div>
        </v-card>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-5 col-sm-5">
        <v-card>
            <div class="card-body">
                <v-card-title>
                    <h1>Add 3rd Party API Key</h1>
                </v-card-title>
                <v-container>
                    <v-form ref="addApiKey" v-model="valid" lazy-validation>

                    </v-form>
                </v-container>
            </div>
        </v-card>
    </div>

</div>
</template>
