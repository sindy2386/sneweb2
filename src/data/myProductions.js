import ProductionOne from '../audio/UH-SAVAGE_Mix11.m4a';
import ProductionTwo from '../audio/SHE.m4a';
import ProductionThree from '../audio/NTMY.m4a';
import ProductionFour from '../audio/LML_MIX3.m4a'
import ProductionFive from '../audio/SummerThatWas.m4a';
import ProductionSix  from '../audio/WLM_Master.m4a';
import ProductionSeven from '../audio/SSLT.m4a';
import ProductionEight from '../audio/You_Master.m4a';
import { uhSavage, she, ntmy, lml, summer, womanLikeMe, SSLT, you } from '../images/ImgAssets';

const myProductions = [
  {
    title: "Ungodly Hour/Savage",
    description: "Treble Threat",
    image: uhSavage,
    song: ProductionOne,
  },
  {
    title: "SHE",
    description: "Priya Mani",
    image: she,
    song: ProductionTwo,
  },
  {
    title: "Nice To Meet Ya",
    description: "Treble Threat",
    image: ntmy,
    song: ProductionThree,
  },
  {
    title: "Let Me Loose",
    description: "The Downfall",
    image: lml,
    song: ProductionFour,
  },
  {
    title: "Summer That Was",
    description: "Abha K.",
    image: summer,
    song: ProductionFive,
  },
  {
    title: "Woman Like Me",
    description: "Treble Threat",
    image: womanLikeMe,
    song: ProductionSix,
  },
  {
    title: "Say So/Like That",
    description: "Treble Threat",
    image: SSLT,
    song: ProductionSeven,
  },
  {
    title: "You",
    description: "Abha K.",
    image: you,
    song: ProductionEight,
  },
  // Additional items if needed
];

export default myProductions;
