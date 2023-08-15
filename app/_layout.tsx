import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from '@/components/store';
import { Provider } from 'react-redux';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={ store }>
      <SafeAreaProvider>
        <Stack screenOptions={{
          headerStyle: {
            backgroundColor: '#252525',
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerTitleAlign: 'center',
        }}>
          <Stack.Screen name='index' options={{ headerTitle: 'Login'}} />
          <Stack.Screen name='register' options={{ headerTitle: 'Register'}}/>
        </Stack>
      </SafeAreaProvider>
    </Provider>
  ) 
}

