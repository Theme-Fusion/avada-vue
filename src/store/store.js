import { defineStore } from 'pinia';
import { actions } from './actions';
import { getters } from './getters';

export const useStore = defineStore( 'AWB', {
  // arrow function recommended for full type inference
  state: () => ( {
    params: {
      title: 'Hello World',
      padding: {
        paddingTop: '50px',
        paddingRight: '50px',
        paddingBottom: '50px',
        paddingLeft: '50px',
      },
      backgroundColor: '#2271b1',
      textColor: '#FFFFFF',
    }
  } ),
  getters: getters,
  actions: actions
} );
