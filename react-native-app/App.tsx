import React from 'react';
import { Navigator } from 'src/navigator';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

// // Accounts
// import ProfileScreen from 'src/ui/screens/ProfileScreen';

// // Posts
// import { HomeScreen } from 'src/ui/screens/HomeScreen';

// Footer
// import { BottomTab } from 'src/ui/components/molecules/BottomTab';

// const Stack = createStackNavigator();

function App() {
  return (
    <Navigator />
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Home"
    //     screenOptions={{
    //       headerStyle: { backgroundColor: 'white' },
    //       headerTitleStyle: { color: '#1F2D3D' },
    //       headerTitle: 'PhotCam',
    //       headerTintColor: 'white',
    //       headerBackTitle: 'back',
    //       cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    //       gestureEnabled: true,
    //       gestureDirection: 'horizontal',
    //     }}
    //   >
    //     {/* Accounts */}
    //     <Stack.Screen name="Profile" component={ProfileScreen} />
    //     {/* Posts */}
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    //   {/* Footer */}
    //   {/* <BottomTab /> */}
    // </NavigationContainer>
  );
}

export default App;
