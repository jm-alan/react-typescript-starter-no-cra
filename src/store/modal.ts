import type { JSXElementConstructor } from 'react';

const SHOW: string = 'modal/SHOW';
const HIDE: string = 'modal/HIDE';
const CURRENT: string = 'modal/CURRENT';

export const ShowModal = (): ModalAction => ({
  type: SHOW
});

export const HideModal = (): ModalAction => ({
  type: HIDE
});

export const SetModalCurrent = (Current: JSXElementConstructor<any>): ModalAction => ({
  type: CURRENT,
  Current
});

export default function reducer (
  state: ModalState = { display: false, Current: null },
  { type, Current }: ModalAction
): ModalState {
  switch (type) {
    case SHOW:
      return {
        ...state,
        display: true
      };
    case HIDE:
      return {
        ...state,
        display: false
      };
    case CURRENT:
      return {
        ...state,
        Current
      };
    default:
      return state;
  }
}
