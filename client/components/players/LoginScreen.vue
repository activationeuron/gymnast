<template>
    <div class="flex flex-1 bg-gray-400 min-h-screen">
        <auth-side-bar />
        <div class="w-full bg-gray-100">
            <div>
                <div class="container mx-1/2 my-32 mx-64 px-3 py-3 w-1/2">
                    <div class="text-left py-2 flex flex-col">
                        <label
                            for="email"
                            class="text-gray-700 font-medium py-2"
                            >Email Address</label
                        >
                        <input
                            class="px-2 py-2 bg-gray-300 text-gray-800"
                            type="text"
                            placeholder="Email Address"
                            v-model="loginDetail.email"
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
                            placeholder="Password"
                            v-model="loginDetail.password"
                        />
                    </div>
                    <div></div>
                    <div>
                        <button
                            class="bg-blue-500 w-full px-2 py-2 text-white font-medium rounded-sm"
                            v-on:click="onLogin"
                        >
                            SIGN IN
                        </button>
                    </div>
                    <div>
                        <router-link to="/auth/register">
                            <button
                                class="bg-gray-500 w-full px-2 py-2 text-white font-medium rounded-sm my-2"
                            >
                                REGISTER
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Events from '../events/Events.vue'
import AuthSideBar from '../sidebar/AuthSideBar.vue'
import { mapActions } from 'vuex'
export default {
    name: 'PlayerRegistration',
    components: {
        Events,
        AuthSideBar
    },
    data: () => {
        return {
            loginDetail: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(['playerLogin']),
        onLogin() {
            this.playerLogin(this.loginDetail).then(role => {
                this.$router.push('/' + role)
            })
        }
    }
}
</script>

<style></style>
