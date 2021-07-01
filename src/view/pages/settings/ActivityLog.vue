<template>
<div class="row">
    <div class="col-md-12">
        <v-card>
            <v-card-title>
                Activity Log
                <v-spacer></v-spacer>
                <v-text-field v-model="code4.search" append-icon="search" label="Search" single-line hide-details></v-text-field>
            </v-card-title>
            <v-data-table :headers="code4.headers" :items="code4.logs" :search="code4.search"></v-data-table>
        </v-card>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            code4: {
                search: "",
                headers: [{
                        text: "Label",
                        value: "name"
                    },
                    {
                        text: "Log",
                        value: "log"
                    },
                    {
                        text: "Date",
                        value: "date"
                    },
                    {
                        text: "Time",
                        value: "time"
                    },
                ],
                logs: [{
                        name: "label",
                        log: "Subscribe to newsletter",
                        date: "28 Jun 2021",
                        time: "03:57:34 AM",
                    },
                    {
                        name: "label",
                        log: "Success full login form localhost",
                        date: "28 Jun 2021",
                        time: "05:47:34 PM",
                    },
                ]
            }
        };
    },
};
</script>
