import './App.css'
import { RandomCrop } from './components/RandomCrop'
import { Button } from './components/ui/button'
import { Slider } from './components/ui/slider'
import { useEffect, useState } from 'react';
import { ChampionImage, ChampionImages, loadImages } from './data/ChampionImages';

function App() {
  
    const [championImages, setChampionImages] = useState<ChampionImages | undefined>(undefined);
    const [currentChampionImage, setCurrentChampionImage] = useState<ChampionImage | undefined>(undefined);

    useEffect(() => {
        loadImages().then((loadedImages) => {
            setChampionImages(new ChampionImages(loadedImages));
        })
    }, [setChampionImages]);

    useEffect(() => {
        setCurrentChampionImage(championImages?.getRandomImage(currentChampionImage));
    }, [championImages]);

    return (
        <>
            <Button variant="outline">Button</Button>
            <Slider defaultValue={[33]} max={100} step={1} />
            {currentChampionImage && <RandomCrop src={currentChampionImage.src} />}
        </>
    )
}

export default App
