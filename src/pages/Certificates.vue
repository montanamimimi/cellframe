<script setup>
    import CertificateList from '@/components/CertificateList.vue'
    import SearchItem from '@/components/SearchItem.vue'
    import ActionsItem from '@/components/ActionsItem.vue'
    import FiltersItem from '@/components/FiltersItem.vue'
    import sourceData from '@/data.json'

    import { ref, computed} from 'vue'

    const certificates = ref(sourceData.certificates)
    const search = ref("")
    const type = ref("1")
    const showFilters = ref(false)
    const showActions = ref(false)

    const props = defineProps({
        wide: {
            type: Boolean,
            required: true
        }
    })  

    function getNewId() {
        let id = 1

        certificates.value.forEach( item => {
        
            if (+item.id >= id) {
                
                id = item.id + 1
            }

        })

        return id
    }

    
    function addCertificate( name ) {

        let newType = (type.value != '0') ? type.value : '1'
        const newSertificate = {
            "id": getNewId(),
            "name":  name,
            "type" : newType
        }

        certificates.value.push(newSertificate)

    }

    const typeName = computed(() => {
        let name = ""
        switch(type.value) {

            case "0": 
                name = "Public and Private"
                break            
            case "1":
                name = "Public"
                break
            case "2":
                name = "Private"
                break
            
        }

        return name
  
    })

    function searchCertificate(searchValue) {
        search.value = searchValue
    }

    function setNewType(newType) {
        type.value = newType
    }

    function getCertificates(type) {

        const searchTextLower = search.value.toLowerCase()
        let list = [];

        if (type == 0) {
            certificates.value.forEach(item => {
                if (item.name.includes(searchTextLower)) {
                    list.push(item)                                 
                }
            })             
        } else {
            certificates.value.forEach(item => {
                if ((item.type == type) && item.name.includes(searchTextLower)) {
                    list.push(item)                                 
                }
            })

        }

        return list

    }
     

</script>

<template>
    <div class="main">
        <SearchItem @searchByName="searchCertificate" />
        <div class="body">

            <CertificateList :list="getCertificates(type)" :type="typeName" />
            <div class="actions" v-if="wide">
                <div class="actions-item">
                    <div class="actions-header">
                        Filter
                    </div>
                    <FiltersItem @changeType="setNewType" />
                </div>

                <div class="actions-item">
                    <div class="actions-header">
                        Actions
                    </div>
                    <ActionsItem @addNew="addCertificate" />  
                </div>
            </div>          

            <div class="actions-mobile" v-else >
                <div class="show-item" @click="showFilters = !showFilters">
                    {{ showFilters ? 'Hide' : 'Show' }} filters
                </div>
                <FiltersItem @changeType="setNewType" v-if="showFilters" />
                <div class="show-item" @click="showActions = !showActions">
                    {{ showActions ? 'Hide' : 'Show' }} actions
                </div>
                <ActionsItem @addNew="addCertificate" v-if="showActions" />  
            </div>
        </div>
    </div>
</template>

<style scoped>

    .body {
        display: flex;
        margin: 24px 21px;
    }

    .actions {
        padding: 12px 0px 12px 28px;
        width: 345px;
    }

    .actions-header {
        font-size: 14px;
        font-style: normal;
        font-weight: 700; 
    }   

    .actions-mobile {
        margin-bottom: 20px;
    }

    .show-item {
        padding: 8px 16px;
    }

    @media (max-width: 1130px) {
        .body {
            flex-direction: column-reverse;
        }

        .actions {
            display: flex;
            width: 100%;
        }

        .actions-item {
            width: 50%;
        }
    }
</style>

