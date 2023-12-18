<script setup>
    import CertificateList from '@/components/CertificateList.vue'
    import SearchItem from '@/components/SearchItem.vue'
    import ActionsItem from '@/components/ActionsItem.vue'
    import FiltersItem from '@/components/FiltersItem.vue'
    import sourceData from '@/data.json'

    import { ref, computed } from 'vue'

    const certificates = ref(sourceData.certificates)
    const search = ref("")
    const type = ref("1")

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
            <div class="actions">
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
        </div>
    </div>
</template>

<style scoped>
    .actions {
        padding: 12px 40px;
    }

    .actions-header {
        font-size: 14px;
        font-style: normal;
        font-weight: 700; 
    }   

    @media (max-width: 1130px) {
        .body {
            flex-direction: column-reverse;
        }

        .actions {
            display: flex;
        }

        .actions-item {
            width: 50%;
        }
    }
</style>

