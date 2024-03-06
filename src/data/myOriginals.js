import { SongOne, SongTwo, SongThree } from '../audio/audioAssets'
import { flyButterfly, strawberryCough, tension } from '../images/ImgAssets';

const myOriginals = [
  {
    title: "Fly",
    description: "Description for Song 1",
    image: flyButterfly,
    song: SongOne,
  },
  {
    title: "Strawberry Cough",
    description: "Description for Song 2",
    image: strawberryCough,
    song: SongTwo,
  },
  {
    title: "Tension",
    description: "Description for Song 3",
    image: tension,
    song: SongThree,
  },
  // Additional items if needed
];

export default myOriginals;
