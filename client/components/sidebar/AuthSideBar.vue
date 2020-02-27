<template>
    <div class="w-1/2 bg-gray-200">
        <div class="flex mx-6 my-2 items-center justify-center">
            <svg
                class="h-8 w-8"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="47" cy="54" fill="#758190" r="8" />
                <circle cx="47" cy="54" fill="#fff" r="5" />
                <path
                    d="M48 45c.662-1.987 1-4.068 1-6.162V21h-4v17.838c0 2.094.338 4.175 1 6.162z"
                    fill="#d5cec2"
                />
                <path d="M44 15h6v6h-6z" fill="#a8b0bc" />
                <path d="M45 10h4v5h-4z" fill="#d5cec2" />
                <path d="M45 45h4v6h-4z" fill="#f2c351" />
                <circle cx="17" cy="54" fill="#758190" r="8" />
                <circle cx="17" cy="54" fill="#fff" r="5" />
                <path
                    d="M18 45c.662-1.987 1-4.068 1-6.162V21h-4v17.838c0 2.094.338 4.175 1 6.162z"
                    fill="#d5cec2"
                />
                <path d="M14 15h6v6h-6z" fill="#a8b0bc" />
                <path d="M15 10h4v5h-4z" fill="#d5cec2" />
                <path
                    d="M60 6H4a2 2 0 1 1 0-4h56a2 2 0 1 1 0 4z"
                    fill="#f7d881"
                />
                <path d="M15 45h4v6h-4z" fill="#f2c351" />
                <g fill="#666">
                    <path
                        d="M7.415 2h-2.83l4 4h2.83zM14.585 6h2.829l-4-4h-2.829zM20.585 6h2.829l-4-4h-2.829zM26.585 6h2.829l-4-4h-2.829zM32.585 6h2.829l-4-4h-2.829zM38.585 6h2.829l-4-4h-2.829zM44.584 6h2.83l-4-4h-2.83zM50.585 6h2.829l-4-4h-2.829zM56.585 6h2.829l-4-4h-2.829z"
                    />
                </g>
                <path d="M14 6v4h6V6M44 6v4h6V6" fill="#758190" />
                <path
                    d="M15.999 17h1.999v2h-1.999zM45.999 17h1.999v2h-1.999z"
                    fill="#c1c8d1"
                />
                <path
                    d="M15 50.193a5.013 5.013 0 0 0 3.028-4.601c0-.203-.036-.395-.06-.592H15zM45 50.193a5.013 5.013 0 0 0 3.028-4.601c0-.203-.036-.395-.06-.592H45z"
                    fill="#f7d881"
                />
            </svg>
            <h1 class="text-2xl font-medium text-gray-800 uppercase">
                Gymanistic
            </h1>
        </div>
        <div
            class="mx-3 py-2 border-gray-400 font-semibold uppercase text-gray-700"
        >
            Upcoming Events
        </div>
        <div>
            <Events />
        </div></div
></template>

<script>
import Events from '../events/Events.vue'
export default {
    name: 'AuthSideBar',
    components: {
        Events
    }
}
</script>

<style></style>
