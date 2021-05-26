import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ScreenSignin from './screens/ScreenSignin';
import ScreenHome from './screens/ScreenHome';
import UserContext from './context/user.context';
import * as SplashScreen from 'expo-splash-screen';
import firebase from './config/firebase.config';
import { FBService } from './services/auth.service';
import { IconButton } from './components/IconButton/IconButton';

const Stack = createStackNavigator(); // Navigator, Screen

export default function App() {
  const [user, setUser] = React.useState(null);
  const userContext = {
    user,
    login: (user) => {
      console.log(user);
      setUser(user);
    },
    logout: () => {
      FBService.signOut().then(() => setUser(null));
    },
  };

  useEffect(() => {
    async function loadAsyncResources() {
      try {
        SplashScreen.preventAutoHideAsync();
        firebase.auth().onAuthStateChanged((user) => {
          setUser(user);
          SplashScreen.hideAsync();
        });
      } catch (e) {
        SplashScreen.hideAsync();
      }
    }

    loadAsyncResources();
  });

  return (
    <UserContext.Provider value={userContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {!user ? (
            <>
              <Stack.Screen name="signin" component={ScreenSignin} options={{ headerShown: false }} />
            </>
          ) : (
            <>
              <Stack.Screen
                name="home"
                component={ScreenHome}
                options={{
                  headerRight: () => <IconButton onPress={() => userContext.logout()} icon="logout" size={24} color="black" />,
                }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
