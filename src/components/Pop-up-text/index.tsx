import './PopUp.scss';
import cn from 'classnames';
import { motion } from 'framer-motion';

interface IPopUpText {
  isVisible: boolean;
}

export function PopUpText({ isVisible }: IPopUpText) {
  return (
    <>
      {
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          className={cn('pop-up')}>
          <div>
            <svg
              fill="green"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <path d="M10.5,14.7928932 L17.1464466,8.14644661 C17.3417088,7.95118446 17.6582912,7.95118446 17.8535534,8.14644661 C18.0488155,8.34170876 18.0488155,8.65829124 17.8535534,8.85355339 L10.8535534,15.8535534 C10.6582912,16.0488155 10.3417088,16.0488155 10.1464466,15.8535534 L7.14644661,12.8535534 C6.95118446,12.6582912 6.95118446,12.3417088 7.14644661,12.1464466 C7.34170876,11.9511845 7.65829124,11.9511845 7.85355339,12.1464466 L10.5,14.7928932 Z" />
            </svg>
          </div>
          <p>Todo added</p>
        </motion.div>
      }
    </>
  );
}