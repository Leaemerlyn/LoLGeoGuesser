import AatroxOriginal from './assets/Original_Skin/Aatrox_OriginalSkin_HD.jpg'
import './App.css'
import { RandomCrop } from './components/RandomCrop'

function App() {

    return (
        <>
            <RandomCrop src={AatroxOriginal} />
        </>
    )
}

export default App
