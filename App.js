import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';
import Home from './components/Home';
import Onboard from './components/Onboard';

export default function App() {
  const [showDashboard, setShowDashboard] = useState(true);

  const handleDashboardFinish = () => {
    setShowDashboard(false);
  };

  return (
    <View style={{flex: 1}}>
      <>
      {showDashboard && (
        <>
          <StatusBar translucent backgroundColor="transparent" />
          <Onboard handleDone={handleDashboardFinish}/>
        </>
      )}
      {!showDashboard && <Home />}
      </>      
    </View>
  )
}
