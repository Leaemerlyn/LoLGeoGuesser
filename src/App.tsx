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
    const [currentGuess, setCurrentGuess] = useState("") // current champion guesses
    const [correctGuess, setCorrectGuess] = useState<boolean | undefined>(undefined)
    const [numOfGuesses, setNumOfGuesses] = useState(0)

    useEffect(() => {
        loadImages().then((loadedImages) => {
            setChampionImages(new ChampionImages(loadedImages));
        })
    }, [setChampionImages]);

    useEffect(() => {
        setCurrentChampionImage(championImages?.getRandomImage(currentChampionImage));
    }, [championImages]);

    function onSubmit() {
        setNumOfGuesses((prev) => prev + 1)
        setCorrectGuess(currentGuess === currentChampionImage?.label)
    }

    function onReset() {
        if (!championImages) return;
        setCurrentChampionImage(championImages.getRandomImage(currentChampionImage));
        setCurrentGuess("");
        setCorrectGuess(undefined);
        setNumOfGuesses(0);
    }

    // add onclick button > reset current champion to a new random champion (just use UseEffect) > set # of guesses back to zero > set current guess back to empty string > set correct guess to undefined 
    // maybe organize this return to be easier reads lea dont love all the braces 

    return (
        <>
            {currentChampionImage && <RandomCrop src={currentChampionImage.src} />}
            {championImages && <ComboBox championList={championImages.images} value={currentGuess} setValue={setCurrentGuess} />}
            <Button variant={'outline'} onClick={onSubmit}>Submit Guess</Button>
            <Button variant={'secondary'} onClick={onReset}>Next</Button>
            {correctGuess !== undefined && <Alert>
                <AlertDescription>
                    {correctGuess ? "You are Correct!!!!" : "BOOOOO you wrong"}
                </AlertDescription>
            </Alert>}
            {currentChampionImage != undefined && correctGuess ? <img src={currentChampionImage.src} />: ""}
            <h3>Number of Guesses so Far</h3>
            <p>{numOfGuesses}</p>
        </>
    )
}

export default App
