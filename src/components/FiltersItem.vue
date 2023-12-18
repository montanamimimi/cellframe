<script setup>

</script>

<template>
    <div class="actions-radio">
        <label class="actions-radio__container">Public certificates
            <input name="types" id="types1" type="radio" @click="$emit('changeType', '1')" checked>
            <span class="checkmark"></span>
        </label>
        <label class="actions-radio__container">Private certificates
            <input name="types" id="types2" type="radio" @click="$emit('changeType', '2')">
            <span class="checkmark"></span>
        </label>
        <label class="actions-radio__container">Both
            <input name="types" id="types3" type="radio" @click="$emit('changeType', '0')">
            <span class="checkmark"></span>
        </label>
    </div>
</template>

<style scoped>

.actions-radio {
    margin-top: 24px;
    margin-bottom: 40px;
}

.actions-radio__container {
    display: block;
    position: relative;
    padding-left: 36px;
    margin-bottom: 32px;
    cursor: pointer;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  .actions-radio__container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: var(--radioColor);
    border-radius: 50%;
    box-shadow: inset 1px 1px 4px #7175805d;
    filter: drop-shadow(2px 2px 2px rgba(8, 7, 13, 0.42));
  }
  
    .actions-radio__container:hover input ~ .checkmark {
    background-color: var(--radioColor);
  }
  
  .actions-radio__container input:checked ~ .checkmark {
    background: linear-gradient(to right, #7930DE, #7F65FF);
    box-shadow: 1px 1px 2px 0px rgba(8, 7, 13, 0.24) inset; 
  }

  .checkmark:after {
    content: "";
    position: absolute;
    top: 6px;
    left: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background:  var(--radioInner);
  }

  .actions-radio__container input:checked ~ .checkmark:after {
    background:  var(--panelColor);
  }



</style>