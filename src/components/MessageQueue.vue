<template>
    <div class="message-queue__wrapper p-4 mb-3">
        <div class="d-flex align-items-center">
            <button class="btn-close mr-3" @click="$emit('dismiss', message.id)"></button>
            <div class="ms-3">{{ message?.text }}</div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({ message: Object });
</script>

<style scoped lang="scss">
.message-queue__wrapper {
    background: #E4F0ED;
    border-radius: 6px;
}
</style>