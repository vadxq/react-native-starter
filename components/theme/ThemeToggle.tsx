import { useColorScheme } from 'nativewind';

import Icon from '~/components/ui/Icon';
import { Button } from '~/components/ui/button';

export function ThemeToggle() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  };
  const colors = colorScheme === 'light' ? '#fff' : '#000';

  return (
    <Button onPress={toggleColorScheme} size="icon">
      {colorScheme === 'light' ? <Icon name="Sun" color={colors} size={18} /> : <Icon name="Moon" color={colors} size={18} />}
    </Button>
  );
}
