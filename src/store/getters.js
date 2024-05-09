export const getters = {
    getTitle(store) {
        return store.params.title;
    },
    getPaddingTop(store) {
        return store.params.padding.paddingTop;
    },
    getPaddingRight(store) {
        return store.params.padding.paddingRight;
    },
    getPaddingBottom( store ) {
        return store.params.padding.paddingBottom;
    },
    getPaddingLeft(store) {
        return store.params.padding.paddingLeft;
    },
    getBackground(store) {
       return store.params.backgroundColor;
    },
    getTextColor(store) {
       return store.params.textColor;
    }
};