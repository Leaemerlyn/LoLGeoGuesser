import './App.css'
import { RandomCrop } from './components/RandomCrop'
import { useEffect, useState } from 'react';
import { ChampionImage, ChampionImages, loadImages } from './data/ChampionImages';
import { ComboBox } from './components/ComboBox';
import { Button } from './components/ui/button';
import { Alert, AlertDescription } from './components/ui/alert';

function App() {

    const [championImages, setChampionImages] = useState<ChampionImages | undefined>(undefined);
    const [currentChampionImage, setCurrentChampionImage] = useState<ChampionImage | undefined>(undefined);
    const [value, setValue] = useState("")
    const [correctGuess, setCorrectGuess] = useState<boolean | undefined>(undefined)

    useEffect(() => {
        loadImages().then((loadedImages) => {
            setChampionImages(new ChampionImages(loadedImages));
        })
    }, [setChampionImages]);

    useEffect(() => {
        setCurrentChampionImage(championImages?.getRandomImage(currentChampionImage));
    }, [championImages]);

    function onSubmit() {
        setCorrectGuess(value === currentChampionImage?.label)
    }

    return (
        <>
            {currentChampionImage && <RandomCrop src={currentChampionImage.src} />}
            {championImages && <ComboBox championList={championImages.images} value={value} setValue={setValue} />}
            <Button variant={'outline'} onClick={onSubmit}>Submit Guess</Button>
            <Alert>
                <AlertDescription>
                    {correctGuess? "You are Correct!!!!" : "BOOOOO you wrong"}
                </AlertDescription>
            </Alert>
        </>
    )
}

export default App
