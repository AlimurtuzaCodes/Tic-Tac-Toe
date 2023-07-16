import { playerO, playerX } from "../assets";

const board_config = [
  { id: "a", extrastyle: "rounded-tl-lg lg:rounded-tl-[18px]" },
  { id: "b" },
  { id: "c", extrastyle: "rounded-tr-lg lg:rounded-tr-[18px]" },
  { id: "d" },
  { id: "e" },
  { id: "f" },
  { id: "g", extrastyle: "rounded-bl-lg lg:rounded-bl-[18px]" },
  { id: "h" },
  { id: "i", extrastyle: "rounded-br-lg lg:rounded-br-[18px]" },
];

const playerStyle = [
  {
    player: "X",
    title: "STAR WINS",
    color: "#C6D4D9",
    icon: playerX,
  },
  {
    player: "O",
    title: "PLANET WINS",
    color: "#E9B98B",
    icon: playerO,
  },
  {
    player: "draw",
    title: "DRAW",
    color: "#ECE5D5",
  },
];

export { board_config, playerStyle };
