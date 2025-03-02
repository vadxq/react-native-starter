import { icons } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';

interface IconProps {
  size?: number;
  name: string;
  color?: string;
}

const Icon = ({ name, color, size = 24 }: IconProps) => {
  const { colorScheme } = useColorScheme();
  const LucideIcon = icons[name as keyof typeof icons];
  const themedcolor = colorScheme === 'light' ? '#ffffff' : '#000000';

  return <LucideIcon color={color ?? themedcolor} size={size} />;
};
export default Icon;
