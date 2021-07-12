import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity, StyleSheet } from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';

import { HomeScreen } from 'src/ui/screens/HomeScreen';
import { TimeLineScreen } from 'src/ui/screens/TimeLine';
import { CampingFoodScreen } from 'src/ui/screens/CampingFood';
import { CampingFoodDetailScreen } from 'src/ui/screens/CampingFoodDetail';
import { PostDetailScreen } from 'src/ui/screens/PostDetailScreen';
import { LikeUsersScreen } from 'src/ui/screens/LikeUsersScreen';
import { ChatListScreen } from 'src/ui/screens/ChatListScreen';
import { ChatDetailScreen } from 'src/ui/screens/ChatDetailScreen';

import {
  HOME,
  TIMELINE,
  topTabs,
  POST_DETAIL,
  LIKE_USERS,
  CHAT_LIST,
  CHAT_DETAIL,
  CAMPING_FOOD,
  CAMPING_FOOD_DETAIL,
} from 'src/config/screens';

const Tab = createMaterialTopTabNavigator();
function HomeTopTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={HOME} component={HomeScreen} options={{ tabBarLabel: topTabs.home }} />
      <Tab.Screen
        name={TIMELINE}
        component={TimeLineScreen}
        options={{ tabBarLabel: topTabs.timeLine }}
      />
      <Tab.Screen
        name={CAMPING_FOOD}
        component={CampingFoodScreen}
        options={{ tabBarLabel: topTabs.campingFood }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
export const HomeStack = () => {
  const { navigate } = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HOME}
        component={HomeTopTab}
        options={{
          headerRight: () => (
            <TouchableOpacity
              style={styles.homeIcon}
              onPress={() => {
                navigate(CHAT_LIST);
              }}
            >
              <IconFeather name="message-circle" size={25} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name={POST_DETAIL} component={PostDetailScreen} />
      <Stack.Screen name={LIKE_USERS} component={LikeUsersScreen} />
      <Stack.Screen name={CHAT_LIST} component={ChatListScreen} />
      <Stack.Screen name={CHAT_DETAIL} component={ChatDetailScreen} />
      <Stack.Screen name={CAMPING_FOOD_DETAIL} component={CampingFoodDetailScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  homeIcon: {
    right: 15,
  },
});
