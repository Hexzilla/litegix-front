<template>
<div class="card card-custom">
    <!--begin::Header-->
    <v-card-title>
        <h1>3rd Party API Key</h1>
        <v-spacer></v-spacer>
        <v-text-field v-model="tableData.search" label="Search..." append-icon="search" hide-details outlined dense class="mr-2">
        </v-text-field>
        <router-link to="/settings/third_party_api_key/add" v-slot="{ href, navigate }">
            <a :href="href" @click="navigate" data-nsfw-filter-status="swf">
                <button type="button" class="btn btn-success" ref="add">
                    Add API Key
                </button>
            </a>
        </router-link>
    </v-card-title>

    <div class="card-body">
        <p class="text-muted font-weight-bold font-size-sm mt-1">
            This is where you can add 3rd Party API Key. This API Key will be used to authorize <b>Let's Encrypt</b> and <b>Spin up a new server</b>. You can add up to 20 API Keys here.
        </p>
        <v-data-table :headers="tableData.headers" :items="tableData.logs" :search="tableData.search"></v-data-table>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            tableData: {
                search: "",
                headers: [{
                        text: "Service",
                        value: "service"
                    },
                    {
                        text: "Email/Username",
                        value: "email"
                    },
                    {
                        text: "Secret",
                        value: "secret"
                    },
                    {
                        text: "Action",
                        value: "action"
                    },
                ],
                logs: [{
                        service: "label",
                        email: "Subscribe to newsletter",
                        secret: "28 Jun 2021",
                        action: "",
                    },
                    {
                        service: "label",
                        email: "Success full login form localhost",
                        secret: "28 Jun 2021",
                        action: "",
                    },
                ]
            }
        };
    },
};
</script>
