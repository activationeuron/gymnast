<template>
    <div class="">
        <div class="pt-4 px-4">
            <div class="flex  px-6">
                <div class="bg-white px-6 py-2 shadow-lg flex">
                    <div class="px-4">
                        <div class="py-2 font-semibold text-gray-700">
                            Title
                        </div>
                        <div>
                            <input
                                type="text"
                                name=""
                                class="pt-2 pb-1 border px-2 rounded-sm text-gray-800"
                                placeholder="Name of the Event"
                                v-model="eventdata.name"
                            />
                        </div>
                        <div>
                            <div class="pt-2 pb-1 font-semibold text-gray-700">
                                Discription
                            </div>
                            <textarea
                                name=""
                                class="py-1 w-full border px-2 rounded-sm text-gray-800 h-20"
                                placeholder="Write Description About The Event"
                                v-model="eventdata.discription"
                            ></textarea>
                        </div>
                        <div class="py-1 font-semibold text-gray-700">
                            Location
                        </div>
                        <div>
                            <input
                                type="text"
                                name=""
                                class="pt-2 pb-1 border px-2 rounded-sm text-gray-800"
                                placeholder="Enter Address "
                                v-model="eventdata.location"
                            />
                        </div>
                        <div class="pt-4  font-semibold text-gray-700">
                            Registration Due
                        </div>
                        <div class="flex w-full py-1">
                            <div>
                                <input
                                    type="date"
                                    name=""
                                    class="pt-2 pb-1 border px-2 rounded-sm text-gray-800 uppercase"
                                    v-model="eventdata.registrationDue"
                                />
                            </div>
                        </div>
                        <div class="pt-4  font-semibold text-gray-700">
                            Event Date
                        </div>
                        <div class="flex w-full py-1">
                            <div>
                                <input
                                    type="date"
                                    name=""
                                    class="pt-2 pb-1 border px-2 rounded-sm text-gray-800 uppercase"
                                    v-model="eventdata.eventDate"
                                />
                            </div>
                        </div>
                        <div class="pt-4  font-semibold text-gray-700">
                            Reporting Time
                        </div>
                        <div class="flex w-full py-1">
                            <div>
                                <input
                                    type="time"
                                    name=""
                                    class="pt-2 pb-1 border px-2 max-w-xs rounded-sm text-gray-800 uppercase"
                                    v-model="eventdata.reportingTime"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="pl-10">
                        <div class="font-medium text-gray-700 text-xl">
                            Select Level
                        </div>
                        <div class="flex py-4">
                            <button
                                class="btn-primary hover:bg-blue-700"
                                @click="log"
                            >
                                LEVEL-01
                            </button>
                            <button class="btn-primary hover:bg-blue-700">
                                LEVEL-02
                            </button>
                            <button class="btn-primary hover:bg-blue-700">
                                LEVEL-03
                            </button>
                            <button class="btn-primary hover:bg-blue-700">
                                LEVEL-04
                            </button>
                            <button
                                class="btn-primary hover:bg-blue-700"
                                @click="getSheetByLevel('LEVEL-5')"
                            >
                                LEVEL-05
                            </button>
                        </div>
                        <div v-if="!retriveSheetByLevel">
                            <div
                                class="text-center text-2xl text-gray-700 py-12"
                            >
                                Select Any Level to Retrive Sheets
                            </div>
                        </div>
                        <div v-else>
                            <div
                                v-for="level in retriveSheetByLevel"
                                :key="level._id"
                            >
                                <div
                                    class="flex justify-between px-6 py-3 bg-gray-300 my-2"
                                >
                                    <div>
                                        <svg
                                            class="h-6 w-6 bg-gray-900 rounded-full text-white hover:bg-gray-600"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8.99999 16.2L4.79999 12L3.39999 13.4L8.99999 19L21 6.99998L19.6 5.59998L8.99999 16.2Z"
                                                fill-opacity="0.87"
                                            />
                                        </svg>
                                    </div>
                                    <div class="text-gray-900">
                                        {{ level.SheetName }}
                                    </div>
                                    <div class="text-gray-900">
                                        {{ level.sheetLevel }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'CreateEventDilog',
    data: () => {
        return {
            eventdata: {
                name: '',
                discription: '',
                location: '',
                registrationDue: '',
                eventDate: '',
                reportingTime: '',
                level: '',
                appratus: ''
            }
        }
    },
    methods: {
        ...mapActions(['getSheetByLevel']),
        log() {
            console.log(this.eventdata)
        }
    },
    computed: {
        ...mapGetters(['retriveSheetByLevel'])
    }
}
</script>

<style></style>
