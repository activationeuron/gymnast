<template>
    <div class="flex min-h-screen bg-gray-100">
        <div class="bg-gray-800 w-64">
            <AdminSideBarNameLogo />
            <MainAdminSide />
        </div>
        <div class="flex flex-1 m-4 ">
            <router-view> </router-view>
        </div>
    </div>
</template>

<script>
import SideBarButton from '@components/dashboard/SideBarButton.vue'
import AdminSideBarNameLogo from '@components/dashboard/AdminSideBarNameLogo.vue'
import MainAdminSide from '@components/dashboard/MainAdminSide.vue'
export default {
    components: {
        SideBarButton,
        AdminSideBarNameLogo,
        MainAdminSide
    }
}
</script>

<style></style>
