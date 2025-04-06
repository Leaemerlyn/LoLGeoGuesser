import AatroxOriginal from './assets/Original_Skin/Aatrox_OriginalSkin_HD.jpg'
import './App.css'
import { RandomCrop } from './components/RandomCrop'
import { Button } from './components/ui/button'
import { Slider } from './components/ui/slider'

function App() {

    return (
        <>
          <Button variant="outline">Button</Button>
          <Slider defaultValue={[33]} max={100} step={1} />

          <>
            <RandomCrop src={AatroxOriginal} />
          </>

        </>
    )
}

export default App
