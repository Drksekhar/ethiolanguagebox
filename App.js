import React from 'react'
import { View } from 'react-native'
import About from './comp/About'
import Contact from './comp/Contact'
import Mypricecard from './comp/Mypricecard'

export default function App() {
  return (
    <View style={{marginTop:25}}>
      <Mypricecard/>
      <About />
      <Contact/>
    </View>
  )
}
