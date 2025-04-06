import { FC, useMemo } from "react";

export interface RandomCropProps {
    src: string;
}

const WHOLE_IMAGE_HEIGHT = 900;
const WHOLE_IMAGE_WIDTH = 1600;

const CROP_WIDTH = 200;
const CROP_HEIGHT = 200;

export const RandomCrop: FC<RandomCropProps> = (props) => {

    const { src } = props;

    const xRange = WHOLE_IMAGE_WIDTH - CROP_WIDTH;
    const yRange = WHOLE_IMAGE_HEIGHT - CROP_HEIGHT;

    const xTranslate = useMemo(() => {
        return Math.floor(Math.random() * xRange);
    }, [xRange]);

    const yTranslate = useMemo(() => {
        return Math.floor(Math.random() * yRange);
    }, [xRange]);

    console.log(`xTranslate: ${xTranslate}, yTranslate: ${yTranslate}`);

    return <div style={{ overflow: 'hidden', width: `${CROP_WIDTH}px`, height: `${CROP_HEIGHT}px` }}>
        <img src={src} style={{ height: `${WHOLE_IMAGE_HEIGHT}px`, width: `${WHOLE_IMAGE_WIDTH}px`, maxWidth: `${WHOLE_IMAGE_WIDTH}px`, translate: `-${xTranslate}px -${yTranslate}px` }} />
    </div>

}