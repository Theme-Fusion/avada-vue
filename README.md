# Avada Vue Introduction
This repo is for a simple plugin which offers a starting point to vue development.

## Install
- Download repo as zip or pull using a client
- Install as a WordPress plugin on a WordPress install
- Run `npm install` on the avada-vue plugin folder
- Run `npm run build` or `npm run watch` to build the vue App.
- To view, go to the Avada Vue page on your WordPress admin.

![image](https://github.com/Theme-Fusion/avada-vue/assets/9296509/7272d79d-e41d-4fe9-9bfb-c50d079b6828)

## Description
The app is very basic, with the same general tooling as we use in Avada. Primarily those are:
- Vue3 https://vuejs.org/guide/introduction.html
- Single file component approach https://vuejs.org/guide/scaling-up/sfc.html
- Pinia as the store https://pinia.vuejs.org/
- Vite for the building https://vitejs.dev/

The app consists of a single simple data object in the store (text, padding, background color, text color) and a `Preview` component which is fed that data from the store.  Under that are some dummy text fields which do nothing.

## The Task
- The task is to make the fields functional.  
- Each should be passed the appropriate param from the store data.  
- When the input value is changed it should update the store and therefore update the preview.
- For the color options, please import and use an existing online color picker component for vue.  It can be any online color picker.

