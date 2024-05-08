<script setup>
import { useStore } from './store/store';
import Preview from './components/Preview.vue';
const store = useStore();
</script>

<template>
<div class="awb-vue">
   <Preview :params="store.params" />

   <div class="awb-vue__options">
      The options:
      <div class="awb-vue__option">
         <label>Text</label>
         <input type="text" />
      </div>
      <div class="awb-vue__option">
         <label>Padding</label>
         <input type="text" />
         <input type="text" />
         <input type="text" />
         <input type="text" />
      </div>
      <div class="awb-vue__option">
         <label>Color</label>
         <input type="text" />
      </div>
      <div class="awb-vue__option">
         <label>Background</label>
         <input type="text" />
      </div>
   </div>
</div>
</template>

<style>
.awb-vue__options {
   margin-top: 50px;
}
.awb-vue__option {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
.awb-vue__option label {
    width: 100px;
}
</style>
