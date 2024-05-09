<script setup>
import { computed, ref } from "vue";
import { useStore } from "./store/store";
import Preview from "./components/Preview.vue";
import { actions } from "./store/actions";
import { getters } from "./store/getters";

const store = useStore();

const title = computed(() => getters.getTitle(store));
const paddingTop = computed(() => getters.getPaddingTop(store));
const paddingRight = computed(() => getters.getPaddingRight(store));
const paddingBottom = computed(() => getters.getPaddingBottom(store));
const paddingLeft = computed(() => getters.getPaddingLeft(store));
const textColor = computed(() => getters.getTextColor(store));
const backgroundColor = computed(() => getters.getBackground(store));

const updateTitle = (event) => {
  actions.setParamsTitle(store, event.target.value);
};

const updateTextColor = (event) => {
  actions.setTextColor(store, event.target.value);
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
          value="{title}"
        />
      </div>
      <div class="awb-vue__option">
        <label>Padding</label>
        <input
          type="text"
          v-model="paddingTop"
          @input="updatePaddingTop"
          placeholder="Padding Top"
          value="{paddingTop}"
        />
        <input
          type="text"
          v-model="paddingRight"
          @input="updatePaddingRight"
          placeholder="Padding Right"
          value="{paddingRight}"
        />
        <input
          type="text"
          v-model="paddingBottom"
          @input="updatePaddingBottom"
          placeholder="Padding Bottom"
          value="{paddingBottom}"
        />
        <input
          type="text"
          v-model="paddingLeft"
          @input="updatePaddingLeft"
          placeholder="Padding Left"
          value="{paddingLeft}"
        />
      </div>
      <div class="awb-vue__option">
        <label>Color</label>
        <input
          type="text"
          v-model="textColor"
          @input="updateTextColor"
          placeholder="Text Color"
          value="{textColor}"
        />
      </div>
      <div class="awb-vue__option">
        <label>Background</label>
        <input
          type="text"
          v-model="backgroundColor"
          @input="updateBackgroundColor"
          placeholder="Backgrount Color"
          value="{backgroundColor}"
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
