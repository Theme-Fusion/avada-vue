<script setup>
 import { ref } from 'vue';

 const el = ref( null );

 const props = defineProps( {
      params: {
         type: Object,
         required: true
      }
   } );
</script>

<template>
    The output:
   <div 
   ref="el"
   class="awb-vue__preview"
   :style="{
      padding: Object.values( params.padding ).join( ' ' ),
      background: params.background,
      color: params.color,
   }">
      {{ params.title }}
   </div>
</template>

<style>
.awb-vue__preview {
   border-radius: 5px;
   font-size: 48px;
}
</style>
