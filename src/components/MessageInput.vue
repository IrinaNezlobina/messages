<template>
        <div class="input-wrapper form-floating ">
            <input
                type="text"
                id="floatingInput"
                class="form-control custom-input px-2"
                placeholder="Новое сообщение"
                v-model="modelValue"
            />
            <label for="floatingInput">Новое сообщение</label>
        </div>
</template>


<script setup>
    const modelValue = defineModel();
</script>

<style scoped lang="scss">
.custom-input {
    border-radius: 12px;
    border: 1px solid #dee2e6;
    box-shadow: none;
    padding-left: 10px;
}

.input-wrapper {
    position: relative;
    flex-grow: 2;
}
.form-floating > label {
    top: -0.5rem;

    padding: 0;
}
</style>