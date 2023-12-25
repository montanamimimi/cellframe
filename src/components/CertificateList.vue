<script setup>
    const props = defineProps({
        list: {
            type: Array,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    })
</script>

<template>
    <div class="list">
        <div class="list-header">
            Certificates
        </div>
        <div class="list-description">
            {{ type }}
        </div>
        <div class="list-items">
            <div v-for="certificate in list" :key="certificate.id" class="list-item">{{
                certificate.name }}</div>
        </div>
    </div>
</template>

<style scoped>

    .list {
        background: var(--panelColor);
        width: 680px; 
        border-radius: 12px; 
        box-shadow: 3px 3px 4px 0px rgba(8, 7, 13, 0.25) inset, 1px 1px 0px 0px rgba(107, 102, 126, 0.49);

    }

    .list-header {
        font-size: 14px;
        font-style: normal;
        font-weight: 700; 
        padding: 12px 16px;
    }

    .list-description {
        font-size: 12px; 
        background-color: var(--primaryColor);
        padding: 8px 16px 7px 16px;
        box-shadow: 5px 0 4px -3px rgba(8, 7, 13, 0.25) inset;
    }

    .list-item {
        font-size: 16px; 
        padding: 14px 0 15px 0;
        margin: 0 16px;
        border-bottom: 1px solid var(--primaryColor);
    }


    .list-item:nth-child(even) {
        padding-top: 15px;
    }

    .list-item:last-child {
        border-bottom: none;
        padding-top: 14px;
        padding-bottom: 13px;
    }

@media (max-width: 1260px) {
    .list {
        width: 590px; 
    }

}

@media (max-width: 1180px) {
    .list {
        width: 530px; 
    }

}
    
@media (max-width: 1130px) {
    .list {
        width: 100%; 
    }

}
</style>