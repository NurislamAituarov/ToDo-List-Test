interface IDay {
  toggle: boolean;
  setToggle: (value: boolean) => void;
  setTheme: (value: string) => void;
}

export function Day({ setToggle, toggle, setTheme }: IDay) {
  function onClick() {
    setToggle(true);
    setTheme('light');
  }
  return (
    <svg
      onClick={onClick}
      fill="white"
      width="30"
      id="Icons"
      style={{ background: '0 0 32 32' }}
      version="1.1"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <g>
        <path d="M16,8c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8S20.4,8,16,8z" />
        <path d="M16,7c0.6,0,1-0.4,1-1V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v3C15,6.6,15.4,7,16,7z" />
        <path d="M8.2,9.6c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.5,6.1c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L8.2,9.6   z" />
        <path d="M7,16c0-0.6-0.4-1-1-1H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h3C6.6,17,7,16.6,7,16z" />
        <path d="M8.2,22.4l-2.1,2.1c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l2.1-2.1c0.4-0.4,0.4-1,0-1.4   S8.6,22,8.2,22.4z" />
        <path d="M16,25c-0.6,0-1,0.4-1,1v3c0,0.6,0.4,1,1,1s1-0.4,1-1v-3C17,25.4,16.6,25,16,25z" />
        <path d="M23.8,22.4c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l2.1,2.1c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4   L23.8,22.4z" />
        <path d="M29,15h-3c-0.6,0-1,0.4-1,1s0.4,1,1,1h3c0.6,0,1-0.4,1-1S29.6,15,29,15z" />
        <path d="M23.1,9.9c0.3,0,0.5-0.1,0.7-0.3l2.1-2.1c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-2.1,2.1c-0.4,0.4-0.4,1,0,1.4   C22.6,9.8,22.8,9.9,23.1,9.9z" />
      </g>
    </svg>
  );
}
