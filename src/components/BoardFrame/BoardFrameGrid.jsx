import { styles } from "../../styles";
import BoardFrameMisc from "./BoardFrameMisc";

const Heading = ({ title, style }) => {
  return (
    <h1
      className={`font-black text-base text-golden tracking-[10px] ${style}`}
    >
      {title}
    </h1>
  );
};

const BoardFrameGrid = () => {
  return (
    <>
      <div className={`cell_a ${styles.frameItem} rounded-tl-[32px] relative`}>
        <BoardFrameMisc style="left-5 top-10" />
        <Heading title="TIC" style="absolute top-6 right-16" />
      </div>

      <div className={`cell_b ${styles.frameItem} flex justify-center`}>
        <Heading title="TAC" style="mt-6" />
      </div>

      <div className={`cell_c ${styles.frameItem} rounded-tr-[32px] relative`}>
        <BoardFrameMisc style="right-5 top-10" />
        <Heading title="TOE" style="absolute top-6 left-16" />
      </div>

      <div className={`cell_d ${styles.frameItem}`}></div>
      <div className={`cell_e ${styles.frameItem}`}></div>

      <div className={`cell_f ${styles.frameItem} rounded-bl-[32px] relative`}>
        <BoardFrameMisc style="bottom-10 left-5" rotate="rotate-180" />
      </div>

      <div className={`cell_g ${styles.frameItem}`}></div>

      <div className={`cell_h ${styles.frameItem} rounded-br-[32px] relative`}>
        <BoardFrameMisc style="bottom-10 right-5" rotate="rotate-180" />
      </div>
    </>
  );
};

export default BoardFrameGrid;
