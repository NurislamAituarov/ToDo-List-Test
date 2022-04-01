import './PopUp.scss';
import { motion } from 'framer-motion';
import add from '../../image/add.png';

interface IPopUpText {
  isVisible: boolean;
}

export function PopUpText({ isVisible }: IPopUpText) {
  return (
    <motion.div
      className="pop-up"
      animate={{
        x: 0,
        y: 600,
        scale: 0,
        rotate: 0,
      }}>
      <img src={add} alt="added" />
      <p>Todo added</p>
    </motion.div>
  );
}
