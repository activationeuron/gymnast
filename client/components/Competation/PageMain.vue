<template>
    <div>
        <div class="pt-6">
            <div class="flex border-b-2">
                <button
                    class=" px-3 text-gray-800 cursor-pointer border-b-4 border-blue-500 text-lg"
                >
                    Current
                </button>
                <div
                    class="px-3 text-gray-800 hover:border cursor-pointer text-lg"
                >
                    Past
                </div>
            </div>
        </div>
        <div class="flex my-6">
            <DateAndTime />
            <div class="w-1/2">
                second
            </div>
        </div>
    </div>
</template>

<script>
import DateAndTime from './DateAndTime.vue'
export default {
    name: 'mainPagesecrion',
    components: {
        DateAndTime
    }
}
</script>

<style></style>
