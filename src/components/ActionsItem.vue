<script setup>
import { ref } from 'vue'
const created = ref("Newly created cetificate")
const imported = ref("Newly imported cetificate")
const type = ref(1);
</script>

<template>
    <div class="actions-buttons">
        <BaseButton @click="$emit('addNew', created)">Create certificate</BaseButton>
        <BaseButton @click="$emit('addNew', imported)">Import certificate</BaseButton>
        <BaseButton :className="'button--inactive'">Export private certificate to public</BaseButton>
        <BaseButton :className="'button--inactive'">Export certificate to mempool</BaseButton>
        <BaseButton :className="'button--inactive'">Delete certificate</BaseButton>

    </div>
</template>

<style scoped>
.actions-buttons {
    margin-top: 24px;
}
</style>