import { SVGProps } from 'react';

export function FormAddIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width={props.width ? props.width : '30'}
      height={props.height ? props.height : '30'}
      viewBox="0 0 38 38"
      fill={props.color ? props.color : 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.85 37.7C2.81667 37.7 1.91667 37.3167 1.15 36.55C0.383333 35.7833 0 34.8833 0 33.85V3.85C0 2.81667 0.383333 1.91667 1.15 1.15C1.91667 0.383333 2.81667 0 3.85 0H23.65V3.85H3.85V33.85H33.85V14.05H37.7V33.85C37.7 34.8833 37.3167 35.7833 36.55 36.55C35.7833 37.3167 34.8833 37.7 33.85 37.7H3.85ZM10.65 29.65V26.2H27.1V29.65H10.65ZM10.65 22.9V19.45H27.1V22.9H10.65ZM10.65 16.15V12.7H27.1V16.15H10.65ZM29.6 12.55V8.1H25.15V4.5H29.6V0H33.2V4.5H37.7V8.1H33.2V12.55H29.6Z"
        fill="white"
      />
    </svg>
  );
}
