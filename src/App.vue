<script setup>
import { computed, ref, watch } from "vue";
import { useStore } from "./store/store";
import Preview from "./components/Preview.vue";
import { actions } from "./store/actions";
import { getters } from "./store/getters";
import { Sketch } from "@ckpack/vue-color";

const store = useStore();

const title = computed(() => getters.getTitle(store));
const paddingTop = computed(() => getters.getPaddingTop(store));
const paddingRight = computed(() => getters.getPaddingRight(store));
const paddingBottom = computed(() => getters.getPaddingBottom(store));
const paddingLeft = computed(() => getters.getPaddingLeft(store));
const textColor = ref(getters.getTextColor(store)); // Use ref for reactive properties
const backgroundColor = ref(getters.getBackground(store)); // Use ref for reactive properties

watch(textColor, (newColor) => {
  updateTextColor(newColor);
});

const updateTitle = (event) => {
  actions.setParamsTitle(store, event.target.value);
};

const updateTextColor = (event) => {
  const colorValue = event.hex || event.target.value;
  actions.setTextColor(store, colorValue);
};

const updatePaddingTop = (event) => {
  actions.setPaddingTop(store, event.target.value);
};

const updatePaddingRight = (event) => {
  actions.setPaddingRight(store, event.target.value);
};

const updatePaddingBottom = (event) => {
  actions.setPaddingBottom(store, event.target.value);
};

const updatePaddingLeft = (event) => {
  actions.setPaddingLeft(store, event.target.value);
};

const updateBackgroundColor = (event) => {
  actions.setBackground(store, event.target.value);
};
</script>

<template>
  <div class="awb-vue">
    <Preview :params="store.params" />
    <div class="awb-vue__options">
      The options:
      <div class="awb-vue__option">
        <label>Text</label>
        <input
          type="text"
          v-model="title"
          @input="updateTitle"
          placeholder="Title"
        />
      </div>
      <div class="awb-vue__option">
        <label>Padding</label>
        <input
          type="text"
          v-model="paddingTop"
          @input="updatePaddingTop"
          placeholder="Padding Top"
        />
        <input
          type="text"
          v-model="paddingRight"
          @input="updatePaddingRight"
          placeholder="Padding Right"
        />
        <input
          type="text"
          v-model="paddingBottom"
          @input="updatePaddingBottom"
          placeholder="Padding Bottom"
        />
        <input
          type="text"
          v-model="paddingLeft"
          @input="updatePaddingLeft"
          placeholder="Padding Left"
        />
      </div>
      <div class="awb-vue__option">
        <label for="textColor">Color</label>
        <input
          type="text"
          v-model="textColor"
          @input="updateTextColor"
          placeholder="Text Color"
        />
        <Sketch v-model="textColor" />
      </div>

      <div class="awb-vue__option">
        <label>Background</label>
        <input
          type="text"
          v-model="backgroundColor"
          @input="updateBackgroundColor"
          placeholder="Background Color"
        />
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
