import * as React from 'react';
import { increment, decrement } from '../Context/Context.actions';
import Context from '../Context';

const Controls = () => {
  const { dispatch } = React.useContext(Context);

  return React.useMemo(() => {
    return (
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    );
  }, [dispatch]);
};

export default React.memo(Controls);
