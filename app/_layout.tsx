import '~/global.css';

import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { RQCProvider } from '~/components/providers/RQCProvider';
import { ThemeProvider } from '~/components/providers/ThemeProvider';

export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <ThemeProvider>
          <RQCProvider>
            <SafeAreaView style={{ flex: 1 }} className="bg-background">
              <Slot />
            </SafeAreaView>
          </RQCProvider>
          <StatusBar style="auto" />
        </ThemeProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
