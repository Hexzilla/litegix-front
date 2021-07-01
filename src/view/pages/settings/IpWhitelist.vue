<template>
<v-card>
    <div class="card-body">
        <v-card-title>
            <h1>IP Whitelisting</h1>
            <v-spacer></v-spacer>
            <v-text-field v-model="tableData.search" label="Search..." hide-details outlined dense class="mr-2">
            </v-text-field>
            <b-btn variant="success" @click="isEnable" ref="is_enable">Enable</b-btn>
        </v-card-title>
        <div>
            <p class="text-lighten-5 font-size-sm mt-10">
                Whitelist IP Address that can be used to login to your RunCloud account if you enable the IP Whitelisting. If the IP Address is not in here, you need to approve it everytime you log in to RunCloud. If you don't enable this feature, every login will automatically whitelist the IP Address.
            </p>
        </div>
        <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table>
    </div>

    <confirm-dialogue ref="confirmDialogue"></confirm-dialogue>
</v-card>
</template>

<script>
import ConfirmDialogue from "@/view/content/widgets/dialogue/ConfirmDialogue.vue";

export default {
    name: "IpWhitelist",
    components: {
        ConfirmDialogue
    },
    data() {
        return {
            tableData: {
                search: '',
                headers: [{
                        text: 'IP Address',
                        value: 'address'
                    },
                    {
                        text: 'Total login from this IP',
                        value: 'totalLogin'
                    },
                    {
                        text: 'Last browser used',
                        value: 'lastUse'
                    },
                    {
                        text: 'Last login from this IP',
                        value: 'lastLogin'
                    },
                    {
                        text: 'Delete',
                        sortable: false,
                        value: 'del'
                    },
                ],
                desserts: []
            }
        };
    },
    methods: {
        async isEnable() {
            const ok = await this.$refs.confirmDialogue.show({
                title: 'Enable IP Whitelisting',
                message: 'If you enable IP Whitelisting, you will have to verify your IP Address from verification link inside your email if the IP Address is not in whitelist. Enable IP Whitelisting?',
                okButton: 'OK',
            })
            // If you throw an error, the method will terminate here unless you surround it wil try/catch
            if (ok) {
                // alert('You have successfully delete this page.')
            } else {
                // alert('You chose not to delete this page. Doing nothing now.')
            }
        },
    },
};
</script>
