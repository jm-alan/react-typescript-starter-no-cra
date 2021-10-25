const SHOW: string = 'modal/SHOW';
const HIDE: string = 'modal/HIDE';
const MOORING: string = 'modal/MOORING';
const CURRENT: string = 'modal/CURRENT';

export type modalState = {
  display: boolean,
  mooring: JSX.IntrinsicElements;
  Current: JSX.Element,
};

type modalAction = {
  mooring?: JSX.IntrinsicElements;
  Current?: JSX.Element,
  type: string;
};

export const ShowModal = (): modalAction => ({
  type: SHOW
});

export const HideModal = (): modalAction => ({
  type: HIDE
});

export const SetModalMooring = (mooring: JSX.IntrinsicElements): modalAction => ({
  type: MOORING,
  mooring
});

export const SetModalCurrent = (Current: JSX.Element): modalAction => ({
  type: CURRENT,
  Current
});

export default function reducer(
  state: modalState = { display: false, Current: null, mooring: null },
  { type, mooring, Current }: modalAction
): modalState {
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
    case MOORING:
      return {
        ...state,
        mooring
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
