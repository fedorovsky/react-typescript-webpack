import * as React from 'react';
import Controls from './Controls';
import View from './View';
import { ContextProvider } from './Context';

const ComponentWithContext = () => {
  return (
    <ContextProvider>
      <Controls />
      <View />
    </ContextProvider>
  );
};

export default ComponentWithContext;
