import React from 'react';

import { IContextProps } from './context.types';

export function withContext(ContextProvider: React.ComponentType) {
  return function withProviderContext<P extends IContextProps>(
    Component: React.ComponentType<P>,
  ): React.ComponentType<P> {
    const displayName = Component?.displayName || 'Component';

    const ComponentWithContext = (props: P) => {
      return (
        <ContextProvider>
          <Component {...(props as P)} />
        </ContextProvider>
      );
    };

    ComponentWithContext.displayName = `withContext${displayName}`;

    return ComponentWithContext;
  };
}
