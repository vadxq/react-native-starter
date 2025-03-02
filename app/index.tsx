import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';

import AdComponent from '~/components/ad'; // 假设你已经创建了这个组件

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>首页内容</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View className="h-[2000px] flex-1 items-center justify-center">
      <ScrollView>
        <Text className="h-[500px]">设置内容</Text>
      </ScrollView>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>个人资料内容1</Text>
    </View>
  );
}

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3秒后切换到首页

    return () => clearTimeout(timer); // 清理定时器
  }, []);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#0000ff" />
        <AdComponent />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="black" translucent />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'shift',
          tabBarStyle: { position: 'absolute' },
          tabBarBackground: () => <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />,
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </View>
  );
}
