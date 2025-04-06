import { useState } from 'react'
import AatroxOriginal from './assets/Original_Skin/Aatrox_OriginalSkin_HD.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={AatroxOriginal} style={{"height": "500px"}}/>
    </>
  )
}

export default App
