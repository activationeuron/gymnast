<template>
    <div class="">
        <div class="pt-4 px-4 bg-white">
            <div class="flex  px-6 ">
                <div class=" px-6 py-2 shadow-lg ">
                    <div class="flex">
                        <div class="px-4">
                            <div class="py-2 font-semibold text-gray-700">
                                Title
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name=""
                                    class="pt-2 pb-1 border px-2 rounded-sm text-gray-800"
                                    placeholder="Title for the Event"
                                    v-model="eventdata.title"
                                />
                            </div>
                            <div>
                                <div
                                    class="pt-2 pb-1 font-semibold text-gray-700"
                                >
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
                                        v-model="eventdata.registartionDue"
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
                                    @click="getSheetByLevel('LEVEL-1')"
                                >
                                    LEVEL-01
                                </button>
                                <button
                                    class="btn-primary hover:bg-blue-700"
                                    @click="getSheetByLevel('LEVEL-2')"
                                >
                                    LEVEL-02
                                </button>
                                <button
                                    class="btn-primary hover:bg-blue-700"
                                    @click="getSheetByLevel('LEVEL-3')"
                                >
                                    LEVEL-03
                                </button>
                                <button
                                    class="btn-primary hover:bg-blue-700"
                                    @click="getSheetByLevel('LEVEL-4')"
                                >
                                    LEVEL-04
                                </button>
                                <button
                                    class="btn-primary hover:bg-blue-700"
                                    @click="fetchSheetData('LEVEL-5')"
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
                                        :class="
                                            eventdata.levelSheets.includes(
                                                level._id
                                            )
                                                ? 'bg-green-300 '
                                                : 'bg-gray-400'
                                        "
                                        class="flex justify-between px-6 py-3  my-2  text-gray-800 font-medium "
                                        @click="
                                            eventdata.levelSheets.includes(
                                                level._id
                                            )
                                                ? removeSheet(level._id)
                                                : pushSheet(level._id)
                                        "
                                    >
                                        <div class="uppercase">
                                            {{ level.SheetName }}
                                        </div>
                                        <div class="uppercase">
                                            {{ level.sheetLevel }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        class="btn-primary h-12 w-full uppercase"
                        v-on:click="postEventDetails($data.eventdata)"
                    >
                        Sumbit
                    </button>
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
                title: '',
                discription: '',
                location: '',
                registartionDue: '',
                eventDate: '',
                reportingTime: '',
                level: '',
                levelSheets: []
            }
        }
    },
    methods: {
        ...mapActions(['getSheetByLevel', 'postEventDetails']),
        log() {
            console.log(this.$data)
        },
        pushSheet(id) {
            if (!this.$data.eventdata.levelSheets.includes(id)) {
                this.$data.eventdata.levelSheets.push(id)
            }
        },
        removeSheet(id) {
            for (
                var i = this.$data.eventdata.levelSheets.length - 1;
                i >= 0;
                i--
            ) {
                if (this.$data.eventdata.levelSheets[i] === id) {
                    this.$data.eventdata.levelSheets.splice(i, 1)
                }
            }
        },
        fetchSheetData(level) {
            this.$data.eventdata.level = level
            this.getSheetByLevel(level)
        }
    },
    computed: {
        ...mapGetters(['retriveSheetByLevel'])
    }
}
</script>

<style></style>
