import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useDeviceContext } from 'twrnc'
import tw from './lib/tailwind'
import { Router } from './routes/Router'

export default function App() {
  const scheme = useColorScheme()

  useDeviceContext(tw)

  return (
    <SafeAreaProvider>
      {/* <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
      /> */}
      <Router />
    </SafeAreaProvider>
  )
}
