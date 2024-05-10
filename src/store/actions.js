export const actions = {
    setParamsTitle(store, title) {
        store.params.title = title;
    },
    setPaddingTop(store, top) {
        store.params.padding.paddingTop = top;
    },
    setPaddingRight(store, right) {
        store.params.padding.paddingRight = right;
    },
    setPaddingBottom(store, bottom) {
        store.params.padding.paddingBottom = bottom;
    },
    setPaddingLeft(store, left) {
        store.params.padding.paddingLeft = left;
    },
    setBackground(store, background) {
        store.params.backgroundColor = background;
    },
    setTextColor(store, color) {
        store.params.textColor = color;
    }
};
