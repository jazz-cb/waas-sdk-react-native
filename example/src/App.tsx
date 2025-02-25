import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { PoolServiceDemo } from './screens/PoolServiceDemo';
import { MPCKeyServiceDemo } from './screens/MPCKeyServiceDemo';
import { MPCWalletServiceDemo } from './screens/MPCWalletServiceDemo';
import { MPCSignatureDemo } from './screens/MPCSignatureDemo';
import AppContext from './components/AppContext';

/** The navigation stack. */
const Stack = createNativeStackNavigator();

const cloudAPIKey = require('./.coinbase_cloud_api_key.json');

export default function App() {
  const apiKeyName = cloudAPIKey.name;
  const privateKey = cloudAPIKey.privateKey;

  const userCredentials = {
    apiKeyName,
    privateKey,
  };

  return (
    <AppContext.Provider value={userCredentials}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PoolServiceDemo" component={PoolServiceDemo} />
          <Stack.Screen
            name="MPCKeyServiceDemo"
            component={MPCKeyServiceDemo}
          />
          <Stack.Screen
            name="MPCWalletServiceDemo"
            component={MPCWalletServiceDemo}
          />
          <Stack.Screen name="MPCSignatureDemo" component={MPCSignatureDemo} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}
