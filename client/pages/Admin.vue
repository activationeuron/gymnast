<template>
    <div class="flex min-h-screen bg-gray-100">
        <div class="bg-gray-800 w-64">
            <AdminSideBarNameLogo />
            <div class="mx-4 py-2">
                <div
                    class="text-xs text-gray-200 font-medium tracking-wide mb-2"
                >
                    COMPETATION MANAGMENT
                </div>
                <div>
                    <div class="pb-2">
                        <router-link
                            exact-active-class="bg-blue-700"
                            to="/admin/createsheet"
                            class="w-full flex items-center px-3 my-2  inline-block py-2 text-gray-200 text-left rounded-sm hover:bg-blue-600 px-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 text-gray-200 "
                            >
                                <path
                                    d="M3.333 5H1.667v11.667c0 .916.75 1.666 1.666 1.666H15v-1.666H3.333V5zm13.334-3.333h-10C5.75 1.667 5 2.417 5 3.333v10C5 14.25 5.75 15 6.667 15h10c.916 0 1.666-.75 1.666-1.667v-10c0-.916-.75-1.666-1.666-1.666zm-.834 7.5H7.5V7.5h8.333v1.667zM12.5 12.5h-5v-1.667h5V12.5zm3.333-6.667H7.5V4.167h8.333v1.666z"
                                    fill="currentColor"
                                    fill-opacity=".87"
                                />
                            </svg>
                            <span class="ml-2">Create Sheet</span>
                        </router-link>
                        <router-link
                            exact-active-class="bg-blue-700"
                            to="/admin/manage"
                            class="w-full flex items-center px-3 my-2 inline-block py-2 text-gray-200 text-left rounded-sm hover:bg-blue-600 px-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 text-gray-200 "
                            >
                                <path
                                    d="M2.5 4.16667v5h4.16667l-.83334-3.33334 3.33334.83334V2.5h-5C3.25 2.5 2.5 3.25 2.5 4.16667zm4.16667 6.66663H2.5v5c0 .9167.75 1.6667 1.66667 1.6667h5v-4.1667l-3.33334.8334.83334-3.3334zm7.50003 3.3334l-3.3334-.8334V17.5h5c.9167 0 1.6667-.75 1.6667-1.6667v-5h-4.1667l.8334 3.3334zM15.8333 2.5h-5v4.16667l3.3334-.83334-.8334 3.33334H17.5v-5C17.5 3.25 16.75 2.5 15.8333 2.5z"
                                    fill="currentColor"
                                    fill-opacity=".87"
                                />
                            </svg>
                            <span class="ml-2">Manage Competations</span>
                        </router-link>
                        <div>
                            <router-link
                                exact-active-class="bg-blue-700"
                                to="/admin"
                                class=" w-full flex items-center px-3 my-2 inline-block py-2 text-gray-200 text-left rounded-sm hover:bg-blue-600 px-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-5 w-5 text-gray-200 "
                                >
                                    <path
                                        d="M10.8333 10H16.6667V11.25H10.8333V10ZM10.8333 7.91671H16.6667V9.16671H10.8333V7.91671ZM10.8333 12.0834H16.6667V13.3334H10.8333V12.0834ZM17.5 3.33337H2.49999C1.58333 3.33337 0.833328 4.08337 0.833328 5.00004V15.8334C0.833328 16.75 1.58333 17.5 2.49999 17.5H17.5C18.4167 17.5 19.1667 16.75 19.1667 15.8334V5.00004C19.1667 4.08337 18.4167 3.33337 17.5 3.33337ZM17.5 15.8334H9.99999V5.00004H17.5V15.8334Z"
                                        fill="currentColor"
                                        fill-opacity=".87"
                                    />
                                </svg>
                                <span class="ml-2">Overview</span>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div
                    class="text-xs text-gray-200 font-medium tracking-wide mb-2"
                >
                    SPORTS CLUB
                </div>
                <div>
                    <div class="pb-2">
                        <router-link
                            exact-active-class="bg-blue-700"
                            to="/admin/clubs"
                            class="w-full flex items-center px-3 my-2  inline-block py-2 text-gray-200 text-left rounded-sm hover:bg-blue-600 px-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 text-gray-200 "
                            >
                                <path
                                    d="M3.333 5H1.667v11.667c0 .916.75 1.666 1.666 1.666H15v-1.666H3.333V5zm13.334-3.333h-10C5.75 1.667 5 2.417 5 3.333v10C5 14.25 5.75 15 6.667 15h10c.916 0 1.666-.75 1.666-1.667v-10c0-.916-.75-1.666-1.666-1.666zm-.834 7.5H7.5V7.5h8.333v1.667zM12.5 12.5h-5v-1.667h5V12.5zm3.333-6.667H7.5V4.167h8.333v1.666z"
                                    fill="currentColor"
                                    fill-opacity=".87"
                                />
                            </svg>
                            <span class="ml-2">Manage Clubs</span>
                        </router-link>
                    </div>
                </div>
                <div
                    class="text-xs text-gray-200 font-medium tracking-wide mb-2"
                >
                    PLAYERS
                </div>
                <div>
                    <div class="pb-2">
                        <router-link
                            exact-active-class="bg-blue-700"
                            to="/admin/manageplayers"
                            class="w-full flex items-center px-3 my-2  inline-block py-2 text-gray-200 text-left rounded-sm hover:bg-blue-600 px-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 text-gray-200 "
                            >
                                <path
                                    d="M3.333 5H1.667v11.667c0 .916.75 1.666 1.666 1.666H15v-1.666H3.333V5zm13.334-3.333h-10C5.75 1.667 5 2.417 5 3.333v10C5 14.25 5.75 15 6.667 15h10c.916 0 1.666-.75 1.666-1.667v-10c0-.916-.75-1.666-1.666-1.666zm-.834 7.5H7.5V7.5h8.333v1.667zM12.5 12.5h-5v-1.667h5V12.5zm3.333-6.667H7.5V4.167h8.333v1.666z"
                                    fill="currentColor"
                                    fill-opacity=".87"
                                />
                            </svg>
                            <span class="ml-2">Manage Players</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="m-4">
            <router-view> </router-view>
        </div>
    </div>
</template>

<script>
import SideBarButton from '@components/dashboard/SideBarButton.vue'
import AdminSideBarNameLogo from '@components/dashboard/AdminSideBarNameLogo.vue'
export default {
    components: {
        SideBarButton,
        AdminSideBarNameLogo
    }
}
</script>

<style></style>
