<template>
    <div>
        <Dashbord />
    </div>
</template>

<script>
import Dashbord from '@components/players/PlayerDashboard.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'dashbord',
    components: {
        Dashbord
    },
    computed: {}
}
</script>

<style></style>
