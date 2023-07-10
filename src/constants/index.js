import { playerO, playerX } from "../assets";

const board_config = [
  { id: "a", extrastyle: "rounded-tl-[32px]" },
  { id: "b" },
  { id: "c", extrastyle: "rounded-tr-[32px]" },
  { id: "d" },
  { id: "e" },
  { id: "f" },
  { id: "g", extrastyle: "rounded-bl-[32px]" },
  { id: "h" },
  { id: "i", extrastyle: "rounded-br-[32px]" },
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
