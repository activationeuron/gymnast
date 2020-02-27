<template>
    <div class="flex flex-1 bg-gray-400 min-h-screen">
        <auth-side-bar />
        <div class="w-full bg-gray-100">
            <div>
                <div class="container mx-1/2 my-32 mx-64 px-3 py-3 w-1/2">
                    <div class="flex">
                        <div class=" text-left py-2 flex flex-col">
                            <label
                                for="firstName"
                                class="text-gray-700 font-medium py-2"
                                >First Name</label
                            >
                            <input
                                class="px-2 py-2 bg-gray-300 text-gray-800"
                                type="text"
                                v-model="registerDetail.firstname"
                                placeholder="First Name"
                            />
                        </div>
                        <div class="mx-2 text-left py-2 flex flex-col">
                            <label
                                for="lastname"
                                class="text-gray-700 font-medium py-2"
                                >Last Name</label
                            >
                            <input
                                class="px-2 py-2 bg-gray-300 text-gray-800"
                                type="text"
                                v-model="registerDetail.lastname"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>

                    <div class="text-left py-2 flex flex-col">
                        <label
                            for="email"
                            class="text-gray-700 font-medium py-2"
                            >Email Address</label
                        >
                        <input
                            class="px-2 py-2 bg-gray-300 text-gray-800"
                            type="text"
                            v-model="registerDetail.email"
                            placeholder="Email Address"
                        />
                    </div>
                    <div class="w-full text-left py-2 flex flex-col">
                        <label
                            for="passowrd"
                            class="text-gray-700 font-medium py-2"
                            >Password</label
                        >
                        <input
                            class="px-2 py-2 bg-gray-300 text-gray-800"
                            type="password"
                            v-model="registerDetail.password"
                            placeholder="Password"
                        />
                    </div>
                    <div>
                        <label for="club" class="text-gray-700 font-medium py-2"
                            >Select Club</label
                        >
                        <select
                            v-model="registerDetail.club"
                            class="text-gray-800 w-full py-2 my-2"
                        >
                            <option disabled value="">Please select one</option>
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                    </div>

                    <div>
                        <router-link to="/auth/register">
                            <button
                                class="bg-blue-500 w-full px-2 py-2 text-white font-medium rounded-sm my-2"
                                @click="onRegisterClick"
                            >
                                REGISTER
                            </button>
                        </router-link>
                        <div class="text-right">
                            All ready Have Account
                            <router-link to="/auth/login" class="text-blue-800">
                                Login</router-link
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AuthSideBar from '../sidebar/AuthSideBar.vue'
import { mapActions } from 'vuex'
export default {
    name: 'PlayerRegistration',
    data: () => {
        return {
            registerDetail: {
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                club: ''
            }
        }
    },
    components: {
        AuthSideBar
    },
    methods: {
        ...mapActions(['playerRegistration']),
        onRegisterClick: function() {
            console.log(this.registerDetail, 'comps')
            this.playerRegistration(this.registerDetail)
        },
        click: function() {
            console.log('thi')
        }
    }
}
</script>

<style></style>
