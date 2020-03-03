<template>
    <div class="w-full">
        <div class="flex flex-1 flex justify-between">
            <div class="text-xl font-medium text-gray-800">Events</div>
            <div>
                <div class=" flex items-center">
                    <input
                        type="text"
                        placeholder="Search"
                        class="px-1 py-1 bg-gray-300"
                    />
                    <button class="bg-gray-500 px-1 py-1 ml-1 rounded-sm">
                        <svg
                            class="h-6 w-6 text-black"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2H9.99999c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42H14c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.50001-1.57-3.50001-3.5S10.07 8.5 12 8.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5z"
                                fill-opacity=".87"
                            />
                        </svg>
                    </button>
                    <button
                        class="bg-blue-600 px-1 py-1 ml-2 rounded-sm shadow shadow-inner"
                        @click="openCreateEvent"
                    >
                        <svg
                            class="h-6 w-6 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                                fill="currentColor"
                                fill-opacity=".87"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div v-show="openCreatepage">
            <PageMain />
        </div>
        <div v-show="!openCreatepage">
            <CreateEventDilog />
        </div>
    </div>
</template>

<script>
import PageMain from '../Competation/PageMain.vue'
import CreateEventDilog from '../Competation/CreateEventDilog.vue'
export default {
    name: 'manage',
    components: {
        PageMain,
        CreateEventDilog
    },
    data: () => {
        return {
            openCreatepage: false
        }
    },
    methods: {
        openCreateEvent() {
            console.log(this.openCreatepage)
            this.openCreatepage = !this.openCreatepage
        }
    }
}
</script>

<style></style>
