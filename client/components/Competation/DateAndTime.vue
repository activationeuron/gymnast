<template>
    <div class=" p-3 mx-12 bg-white border">
        <div>
            <!-- Event Card -->
            <div class="flex items-center justify-between px-2 py-2">
                <div class="text-sm font-medium text-gray-800">
                    ANUAL COMPETATION
                </div>
                <button
                    class="text-xs rounded-sm border border-blue-600 text-blue-600 px-2 py-1 font-semibold"
                >
                    Add Events
                </button>
            </div>
            <div class="border-t-2">
                <div class="flex">
                    <div class="auto inline-block pt-2 px-4 text-center">
                        <div class="text-lg text-blue-600 font-semibold">
                            APRIL
                        </div>
                        <div class="text-2xl text-gray-900">23</div>
                        <div class="text-center -my-1">Saturday</div>
                        <span class="text-center inline-block w-6 pt-2">
                            <svg
                                class="h-6 w-6 text-gray-700 text-center"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"
                                    fill-opacity=".87"
                                />
                            </svg>
                        </span>
                    </div>
                    <div class="px-2 py-2">
                        <div class="flex px-2 items-center ">
                            <svg
                                class="w-6 h-6 tex-gray-800"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17 12H12V17H17V12ZM16 1V3H8V1H6V3H5C3.89 3 3.01 3.9 3.01 5L3 19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H18V1H16ZM19 19H5V8H19V19Z"
                                    fill="black"
                                    fill-opacity="0.87"
                                />
                            </svg>
                            <span class="px-2 text-gray-900 py-1"
                                >10/12/2020 10:30am-3:00pm</span
                            >
                        </div>
                        <div class="flex items-center px-2 py-1">
                            <svg
                                class="h-6 w-6 text-gray-800"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z"
                                    fill="black"
                                    fill-opacity="0.87"
                                />
                            </svg>
                            <span class="px-2 text-gray-800"
                                >3 Days 30 minutes</span
                            >
                        </div>
                        <div class="flex text-center px-2 py-1">
                            <svg
                                class="w-6 h-6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
                                    fill="currentColor"
                                    fill-opacity="0.87"
                                />
                            </svg>
                            <span class="px-2 text-gray-800">2</span>
                        </div>
                        <div class="flex text-center px-2 py-1">
                            <svg
                                class="w-6 h-6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                                    fill="currentColor"
                                    fill-opacity="0.87"
                                />
                            </svg>
                            <span class="px-2 text-gray-800"
                                >Kida Mandle,Mumbai-4</span
                            >
                        </div>
                        {{ getAllEvents(true) }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'dateAndTime',
    data: () => {
        return {}
    },
    methods: {
        ...mapActions(['getAllEvents'])
    },
    computed: {},
    mounted: {}
}
</script>

<style></style>
