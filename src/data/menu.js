import { LoremIpsum, loremIpsum } from "lorem-ipsum";
import lemon from "./../images/lemon dessert.jpg";
import salad from "./../images/greek salad.jpg";
import bruchetta from "./../images/bruchetta.svg";

const desc = loremIpsum({
  count: 20,
  units: "words",
});

export const menu = [
  {
    name: "Greek Salad",
    price: "$4.99",
    desc: desc,
    src: salad,
  },
  {
    name: "Bruchetta",
    price: "$4.99",
    desc: desc,
    src: bruchetta,
  },
  {
    name: "Lemon Dessert",
    price: "$4.99",
    desc: desc,
    src: lemon,
  },
];
