
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text
} from 'react-native';

import ContactsScreen from './src/screens/ContactsScreen';
import CallingScreen from './src/screens/CallingScreen';
import IncomingCallScreen from './src/screens/IncomingCallScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      {/* <IncomingCallScreen /> */}
      <CallingScreen />
      {/* <ContactsScreen /> */}

      </> 
  
  );
};





export default App;