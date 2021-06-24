import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ProfileScreen } from 'src/ui/screens/ProfileScreen';
import { ProfileEditScreen } from 'src/ui/screens/ProfileEditScreen';
import { ProfileCreateScreen } from 'src/ui/screens/ProfileCreateScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProfileCreate">
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />
        <Stack.Screen name="ProfileCreate" component={ProfileCreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
