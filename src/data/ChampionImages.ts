

export interface ChampionImage {
    src: string;
    label: string;
}

export class ChampionImages {

    public readonly images: ChampionImage[];

    constructor(images: ChampionImage[]) {
        this.images = images;
    }

    public getRandomImage(lastImage?: ChampionImage): ChampionImage {
        let imagesToSelect: ChampionImage[];

        if (lastImage === undefined) {
            imagesToSelect = this.images;
        } else {
            const idx = this.images.indexOf(lastImage);
            imagesToSelect = [...this.images.slice(0, idx), ...this.images.slice(idx + 1)];
        }

        return imagesToSelect[Math.floor(Math.random() * imagesToSelect.length)];
    }

}

interface IDefault {
    default: any;
}

export async function loadImages(): Promise<ChampionImage[]> {
    const imageSources = import.meta.glob('../assets/Original_Skin/*');

    return Promise.all(Object.keys(imageSources).map(async (key) => {
        const src = ((await imageSources[key]() as IDefault).default) as string;

        return {
            src,
            label: src.split("/").at(-1)!.split("_")[0],
        };
    }));
}