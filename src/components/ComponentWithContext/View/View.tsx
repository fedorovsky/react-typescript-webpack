import * as React from 'react';
import Context from '../Context';

const View = () => {
  const context = React.useContext(Context);

  return <div>Count: {context.state.count}</div>;
};

export default View;
