<template>
        <div class="input-wrapper ">
            <input
                type="text"
                id="messageInput"
                class="px-2 message-input"
                placeholder=""
                v-model="modelValue"
            />
            <label  class="placeholder-message" for="messageInput">Новое сообщение</label>
        </div>
</template>


<script setup>
    const modelValue = defineModel();
</script>

<style scoped lang="scss">
//.custom-input {
//    border-radius: 12px;
//    border: 1px solid #dee2e6;
//    box-shadow: none;
//    padding-left: 10px;
//    input {
//        height: 100%;
//    }
//}
//
//.input-wrapper {
//    position: relative;
//    flex-grow: 2;
//}
//.form-floating > label {
//    top: -0.5rem;
//    padding: 0;
//}
.input-wrapper {
    flex-grow: 2;
    position: relative;
    input {
        height: 100%;
        width: 100%;
        padding: 20px 12px;
        border: 1px solid #DEE2E8;
        border-radius: 8px;
        transition: border-color 0.3s;
    }
}
.placeholder-message {
    position: absolute;
    left: 10px;
    top: 20px;
    transition: 0.2s ease all;
    pointer-events: none;
    color: #8B939C;
}

input:focus + .placeholder-message,
input:not(:placeholder-shown) + .placeholder-message {
    top: -8px;
    left: 10px;
    font-size: 12px;
}
</style>