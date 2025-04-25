<template>
    <div class="message-list__wrapper p-4">
        <div v-for="msg in messages" :key="msg.id" class="d-flex justify-content-between">
            <div class="message-list__item mb-2">
                <button v-if="hiddenMessages.has(msg.id)" class="btn-close btn-sm"></button>
                <span>{{ msg.text }} — {{ msg.createdAt }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    messages: Array,
    hiddenMessages: Object
});
</script>

<style scoped lang="scss">
.message-list__wrapper {
    min-height: 300px;
    background: #F6F8FA;
    border-radius: 6px;
}
.message-list__item {
    position: relative;
    margin-left: 20px;
    .btn-close {
        position: absolute;
        left: -20px;
        transform: translate(0, 50%);
        font-size: 10px;
    }
}
</style>