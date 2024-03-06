import { MixOne, MixTwo, MixThree, MixFour, MixFive, MixSix, MixSeven, MixEight } from '../audio/audioAssets'
import { home, twentyFive, nenjil, feelsLikeHome, echo, DWMD, explode, July13 } from '../images/ImgAssets';

const myMixes = [
  {
    title: "Home",
    artist: "Gayathri Krishnan",
    image: home,
    song: MixOne,
  },
  {
    title: "Twenty Five",
    artist: "The Downfall",
    image: twentyFive,
    song: MixTwo,
  },
  {
    title: "Nenjil",
    artist: "Aarya Ganesan",
    image: nenjil,
    song: MixThree,
  },
  {
    title: "Echo",
    artist: "The Downfall",
    image: echo,
    song: MixFour,
  },
  {
    title: "Feels like Home",
    artist: "Abha Karnick",
    image: feelsLikeHome,
    song: MixFive,
  },
  {
    title: "Dance With Me Darling",
    artist: "Abha Karnick",
    image: DWMD,
    song: MixSix,
  },
  {
    title: "Explode",
    artist: "The Downfall",
    image: explode,
    song: MixSeven,
  },
  {
    title: "July 13th",
    artist: "MR IB.",
    image: July13,
    song: MixEight,
  },
  // Additional items if needed
];

export default myMixes;
