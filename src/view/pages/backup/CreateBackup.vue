<template>
    <div class="layout_wrapper">
    <v-app>
        <div class="innerlayout_wrapper">
        

        <v-container fluid>
            <v-card-title>Create Backup</v-card-title>

            <v-subheader class="createbackup_subtitle"><strong>Store in {{store}}</strong></v-subheader>
        <v-radio-group v-model="store">
        <v-row>
            <v-col
                cols="12"
                sm="6"
                >
                <v-hover
                    v-slot="{ hover }"
                    open-delay="200"
                >
                    <v-card
                        :elevation="hover ? 16 : 2"
                        :class="{ 'on-hover': hover,}"
                        class="mx-auto"
                        @click="store = 'basic'"
                        >
                        <v-card-text 
                            :class="{'active_m_radio':store ==='basic'}"
                            class="font-weight-medium mt-12 text-subtitle-1 marginTop0">
                            <strong>Backup Basic</strong>
                            <br> 5GB free of 5GB / Unlimited sites
                        </v-card-text>
                        <div class="hidden_radio">
                        <v-radio  value="basic"></v-radio>
                        </div>
                    </v-card>
                </v-hover>
            </v-col>

            <v-col
            cols="12"
            sm="6"
            >
            <v-hover
                v-slot="{ hover }"
                close-delay="200"
            >
                <v-card
                :elevation="hover ? 16 : 2"
                :class="{ 'on-hover': hover,}"
                class="mx-auto"
                @click="store = 'pro'"
                >
                <v-card-text 
                    :class="{'active_m_radio':store ==='pro',}"
                    class="font-weight-medium mt-12  text-subtitle-1 marginTop0">
                    <strong>Backup Pro</strong> <v-tooltip top>
                        <template v-slot:activator="{ on }">
                        <span class="warning" dark v-on="on"> Trial </span>
                        </template>
                        <span>Trial end in a month</span>
                    </v-tooltip>
                    <br> 2tB free of 2tB / 9999 sites available of 9999 sites
                </v-card-text>
                <div class="hidden_radio">
                <v-radio  value="pro"></v-radio>
                </div>
                </v-card>
            </v-hover>
                
            </v-col>
        </v-row></v-radio-group>
            <v-radio-group v-model="backup_plan">
                <template v-slot:label>
                    <strong>What do you plan to backup?</strong>
                </template>
                <v-radio 
                    value="wordpress"
                    label="Toggle this custom radioBoth (Recommended for WordPress)"></v-radio>
                <v-radio 
                    value="webapp"
                    label="Web Application"></v-radio>
                <v-radio 
                    value="database"
                    label="Database"></v-radio>
            </v-radio-group>

            <v-select
            :items="webapps"
            label="Web Application"
            outlined
            ></v-select>

            <v-select
            :items="databases"
            label="Database"
            outlined
            ></v-select>

            <v-text-field
                v-model="site_label"
                label="Site Label"
                outlined
                placeholder="Label for this Backup Site"
                required
                ></v-text-field>

            <v-subheader class="createbackup_subtitle"><strong>Backup Every</strong></v-subheader>
            <v-slider
                v-model="slider1"
                thumb-label="always"
                :tick-labels="ticksLabels1"
                loader-height="4"
                :max="7"
                step="1"
                ticks="always"
                tick-size="4"
                @input="confirm_agree"
            >
                <template v-slot:thumb-label="{ value }">
                    {{"Backup every "+ ticksLabels1[value]}}
                </template></v-slider>
                <v-dialog
                    v-model="agreeDialog"
                    persistent
                    max-width="290"
                    >
                    <v-card>
                        <v-card-title class="text-h5">
                        Use Google's location service?
                        </v-card-title>
                        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="disagree"
                        >
                            Disagree
                        </v-btn>
                        <v-btn
                            color="green darken-1"
                            text
                            @click="agree"
                        >
                            Agree
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>

            <br><br>

            <v-dialog
                ref="dialog"
                v-model="timer_dialog"
                :return-value.sync="time"
                persistent
                width="290px"
            >
                <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="time"
                    label="Backup Will Start At"
                    prepend-icon="mdi-clock-outline"
                    readonly
                    outlined
                    v-bind="attrs"
                    v-on="on"
                ></v-text-field>
                </template>
                <v-time-picker
                v-if="timer_dialog"
                v-model="time"
                full-width
                >
                <v-spacer></v-spacer>
                <v-btn
                    text
                    color="primary"
                    @click="timer_dialog = false"
                >
                    Cancel
                </v-btn>
                <v-btn
                    text
                    color="primary"
                    @click="$refs.dialog.save(time)"
                >
                    OK
                </v-btn>
                </v-time-picker>
            </v-dialog>


            <v-subheader class="createbackup_subtitle"><strong>Backup File Retention</strong></v-subheader>
            <v-slider
                v-model="slider2"
                :tick-labels="ticksLabels2"
                thumb-label="always"
                loader-height="4"
                :max="3"
                step="1"
                ticks="always"
                tick-size="4"
                @input="confirm_agree"
            >
                <template v-slot:thumb-label="{ value }">
                    {{"Delete backup file after "+ ticksLabels2[value]}}
                </template></v-slider>
            <br><br>

            <v-subheader class="createbackup_subtitle"><strong>Send notification to Email, Slack and/or Telegram when</strong></v-subheader>
            <v-checkbox
                v-model="failed"
                label="Backup failed"
                hide-details
                ></v-checkbox>            
            <v-checkbox
                v-model="success"
                label="Backup success"
                hide-details
                ></v-checkbox>
            <br>
            <br>
            <v-btn
                block
                color="success"
                >Create</v-btn>
        </v-container>
        </div>
    </v-app>
    </div>
</template>
<style scoped>
    >>>.v-slider__thumb {
        height: 20px;
        width: 20px;
    }
    >>>.v-slider--horizontal .v-slider__track-container {
        height: 4px;
    }
    >>>.hidden_radio{
        display: none;
    }
    >>>.active_m_radio{
        border:solid 2px royalblue !important;
    }
    >>>.marginTop0{
        margin-top: 0px !important;
    }
    >>>.layout_wrapper{
        padding: 20px 20px 20px 20px;
    }
    >>>.innerlayout_wrapper{
        padding: 30px;
    }
    >>>.v-slider--horizontal .v-slider__thumb-label > * {
        transform: none !important;
    }
    >>>.v-slider--horizontal .v-slider__thumb-label {
        transform: translate(-50%, -14px) !important;
        height: 20px !important;
        width: 150px !important;
        border-radius: 5px;
    }
    >>>.v-slider--horizontal .v-slider__thumb-label ::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-22%);
        height: 0;
        width: 0;
        border: 5px solid transparent;
        border-top-color: var(--v-primary-base) !important;
    }
    >>>.v-slider__tick-label {
        font-size: 12px;
        font-weight: bold;
    }
    >>>.v-slider__tick--filled {
        background-color:blue !important;
    }
    >>>.createbackup_subtitle{
        font-size: 15px;
    }
</style>
<script>
    import { SET_BREADCRUMB } from "@/core/services/store/breadcrumbs.module";
    export default {
        data: () => ({
            agreeflag:false,
            agreeDialog:false,
            store:"basic",
            success:false,
            failed:false,
            time: null,
            timer_dialog:false,
            webapps: [],
            databases: [],
            backup_plan: 'database',
            site_label: '',
            slider1: 0,
            slider2: 0,
            ticksLabels1: [
                '30 minites',
                '1 hure',
                '2 hure',
                '6 hure',
                '12 hure',
                '1 day',
                '3 day',
                '1 week',
                ],
            ticksLabels2: [
                '3 day',
                '1 week',
                '2 week',
                '1 month',
                ],
        }),
        methods:{
            confirm_agree(num){
                console.log(num);
                if(!this.agreeflag){
                    this.agreeDialog = true;
                }
            },
            agree(){
                this.agreeDialog = false;
                this.agreeflag = true
            },
            disagree(){
                this.agreeDialog = false;
                this.agreeflag = false;
                this.slider1 = 0;
                this.slider2 = 0;
            }
        },
        mounted() {
            this.$store.dispatch(SET_BREADCRUMB, [
            { title: "Backup", route: "Backups" },
            { title: "Create Backup" }
            ]);
        }
    }
</script>
