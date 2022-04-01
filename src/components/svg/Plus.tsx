import s from './svg.module.scss';

interface PlusProps {
  onAddItem?: (value: string) => void;
  value?: string;
}

export default function Plus({ onAddItem, value }: PlusProps) {
  return (
    <div
      className={s.container}
      tabIndex={0}
      onClick={() => onAddItem && value && onAddItem(value)}
      onKeyPress={(e) => {
        if (e.code === 'Enter') {
          onAddItem && value && onAddItem(value);
        }
      }}>
      <svg
        width="20"
        className={s.plus}
        id="Layer_1"
        style={{ background: '0 0 512 512' }}
        version="1.1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <style type="text/css"></style>
        <path
          className="st0"
          d="M381,236H276V131c0-11-9-20-20-20s-20,9-20,20v105H131c-11,0-20,9-20,20s9,20,20,20h105v105c0,11,9,20,20,20  s20-9,20-20V276h105c11,0,20-9,20-20S392,236,381,236z"
        />
      </svg>
    </div>
  );
}
