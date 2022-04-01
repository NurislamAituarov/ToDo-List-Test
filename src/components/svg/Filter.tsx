import s from './svg.module.scss';

interface IFilter {
  setShowFilter: (event: boolean) => void;
  showFilter: boolean;
}

export function Filter({ showFilter, setShowFilter }: IFilter) {
  return (
    <div className={s.container}>
      <svg
        onClick={() => setShowFilter(!showFilter)}
        className={s.filter}
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="20"
        height="20"
        viewBox="0 0 402.577 402.577"
        style={{ background: '0 0 402.577 402.577' }}
        xmlSpace="preserve">
        <g>
          <path
            d="M400.858,11.427c-3.241-7.421-8.85-11.132-16.854-11.136H18.564c-7.993,0-13.61,3.715-16.846,11.136
     c-3.234,7.801-1.903,14.467,3.999,19.985l140.757,140.753v138.755c0,4.955,1.809,9.232,5.424,12.854l73.085,73.083
     c3.429,3.614,7.71,5.428,12.851,5.428c2.282,0,4.66-0.479,7.135-1.43c7.426-3.238,11.14-8.851,11.14-16.845V172.166L396.861,31.413
     C402.765,25.895,404.093,19.231,400.858,11.427z"
          />
        </g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </div>
  );
}
