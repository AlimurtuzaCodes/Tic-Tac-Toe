import { styles } from "../../styles";
import BoardFrameMisc from "./BoardFrameMisc";

const Heading = ({ title }) => {
  return (
    <h1 className="font-black text-xs md:text-sm lg:text-base text-golden tracking-[10px] w-full text-center mt-4">
      {title}
    </h1>
  );
};

const BoardFrameGrid = () => {
  return (
    <>
      <div className={`cell_a ${styles.frameItem} rounded-tl-[32px] relative`}>
        <BoardFrameMisc style="left-5 top-10" />
        <Heading title="TIC" />
      </div>

      <div className={`cell_b ${styles.frameItem} flex justify-center`}>
        <Heading title="TAC" />
      </div>

      <div className={`cell_c ${styles.frameItem} rounded-tr-[32px] relative`}>
        <BoardFrameMisc style="right-5 top-10" />
        <Heading title="TOE" />
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
