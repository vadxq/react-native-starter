import AsyncStorage from '@react-native-async-storage/async-storage';
import { DarkTheme, DefaultTheme, ThemeProvider as RNThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';
import { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { useColorScheme as RNUseColorScheme } from 'react-native';

import { defaultTheme } from '~/consts';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [loaded, setLoaded] = useState(false);
  const { colorScheme, setColorScheme } = useColorScheme();
  const rnColorScheme = RNUseColorScheme();

  useEffect(() => {
    if (loaded) {
      (async () => {
        const theme = await AsyncStorage.getItem('theme');

        if (!theme) {
          const cs = defaultTheme === 'system' ? rnColorScheme : defaultTheme;

          await AsyncStorage.setItem('theme', cs ?? 'system');
          setColorScheme(cs ?? 'system');
          return;
        }

        if (colorScheme && theme !== colorScheme) {
          await AsyncStorage.setItem('theme', colorScheme);
        }
      })();
    }
  }, [colorScheme, loaded]);

  useEffect(() => {
    (async () => {
      const theme = await AsyncStorage.getItem('theme');

      if (theme) {
        setColorScheme(theme as 'light' | 'dark');
      } else {
        setColorScheme(defaultTheme === 'system' ? rnColorScheme || 'system' : defaultTheme);
      }

      setLoaded(true);
    })();
  }, []);

  const isDarkMode = useMemo(() => (!loaded && rnColorScheme === 'dark') || colorScheme === 'dark', [loaded, rnColorScheme, colorScheme]);

  return <RNThemeProvider value={isDarkMode ? DarkTheme : DefaultTheme}>{children}</RNThemeProvider>;
};
