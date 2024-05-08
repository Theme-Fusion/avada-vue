import { defineStore } from 'pinia';
import actions from './actions';
import getters from './getters';

export const useStore = defineStore( 'AWB', {
  // arrow function recommended for full type inference
  state: () => ( {
    params: {
      title: 'Hello World',
      padding: {
        top: '50px',
        right: '50px',
        bottom: '50px',
        left: '50px',
      },
      background: '#2271b1',
      color: '#FFFFFF',
    }
  } ),
  getters: getters,
  actions: actions
} );
