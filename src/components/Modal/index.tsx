import React, { FC } from 'react';
import { useTypedSelector } from '../../utils/hooks';

export default function Modal (): JSX.Element {
  const display = useTypedSelector(state => state.modal.display);
  const Current = useTypedSelector(state => state.modal.Current);

  return display && Current && (
    <div>
      <div>
        <div>
          <Current />
        </div>
      </div>
    </div>
  );
}
