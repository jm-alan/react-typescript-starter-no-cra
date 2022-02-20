declare type ModalState = {
  display: boolean,
  Current: import('react').JSXElementConstructor<any>,
};

declare type ModalAction = {
  Current?: import('react').JSXElementConstructor<any>,
  type: string;
};
