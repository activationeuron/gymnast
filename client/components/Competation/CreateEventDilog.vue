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
                                />
                            </div>
                        </div>
                    </div>
                    <div class="pl-10 ">
                        <div class="font-medium text-gray-700 text-xl">
                            Select Level
                        </div>
                        <div class="flex">
                            <button class="btn-primary hover:bg-blue-700">
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
                            <button class="btn-primary hover:bg-blue-700">
                                LEVEL-05
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CreateEventDilog'
}
</script>

<style></style>
