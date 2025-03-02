import { QueryClient, QueryClientProvider, focusManager } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { AppStateStatus, Platform } from 'react-native';

export const RQCProvider = ({ children }: PropsWithChildren) => {
  function onAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active');
    }
  }

  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2 } },
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
