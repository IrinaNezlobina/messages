<template>
    <div class="container mt-5">
        <div class="message__wrapper p-5">
            <MessageQueue :message="currentMessage"  @dismiss="handleDismiss" />
            <MessageList :messages="messages" :hidden-messages="hiddenMessages"/>
            <div class="d-flex  mt-3 gap-3">
                <MessageInput v-model="newMessage" />
                <SendButton @send="handleSend" />
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import SendButton from "../components/SendButton.vue";
import MessageInput from "../components/MessageInput.vue";
import MessageQueue from "../components/MessageQueue.vue";
import MessageList from "../components/MessageList.vue";

const messages = ref([]);
const newMessage = ref('');
const currentMessage = ref(null);
const hiddenMessages = ref(new Set());
let messageIndex = 0;

const handleSend = () => {
    if (!newMessage.value.trim()) return;
    const message = {
        id: Date.now(),
        text: newMessage.value,
        createdAt: new Date().toLocaleString(),
    };
    messages.value.push(message);
    newMessage.value = '';
}

const handleDismiss = (id) => {
    hiddenMessages.value.add(id);
    if (currentMessage.value?.id === id) {
        currentMessage.value = null;
    }
}

setInterval(() => {
    if (messages.value.length === 0) return;

    let attempts = 0;
    let nextMessage = null;

    while (attempts < messages.value.length) {
        const candidate = messages.value[messageIndex % messages.value.length];
        messageIndex++;
        if (!hiddenMessages.value.has(candidate.id)) {
            nextMessage = candidate;
            break;
        }
        attempts++;
    }

    currentMessage.value = nextMessage;
}, 5000);
</script>

<style scoped>
.message__wrapper {
    max-width: 665px;
    margin-inline: auto;
    background: #FFFFFF;
    box-shadow: 0px 5px 42px rgba(33, 35, 37, 0.12);
    border-radius: 8px;
}
</style>