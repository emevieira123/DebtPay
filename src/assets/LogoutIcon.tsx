import { SVGProps } from 'react';

export function LogoutIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width={props.width ? props.width : '29'}
      height={props.height ? props.height : '28'}
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.47854 28C2.52652 28 1.70875 27.6671 1.02525 27.0013C0.341751 26.3355 0 25.5305 0 24.5863V3.45006C0 2.50584 0.341751 1.69477 1.02525 1.01686C1.70875 0.338954 2.52652 0 3.47854 0H14.3902V3.45006H3.47854V24.5863H14.3902V28H3.47854ZM21.3472 21.6809L18.8573 19.284L22.4457 15.725H10.1793V12.3113H22.3725L18.7841 8.75227L21.274 6.35538L29 14.0545L21.3472 21.6809Z"
        fill="currentColor"
        // fill={props.color ? props.color : '#4A4A4A'}
      />
    </svg>
  );
}
