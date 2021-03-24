import * as React from 'react';
import { colors } from 'utils/variables';

export interface CloseIconProps extends React.SVGAttributes<SVGSVGElement> {
  wrapperFill?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({ width, height, fill, wrapperFill, ...rest }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill={wrapperFill}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M8 1.33325C6.68146 1.33325 5.39252 1.72425 4.2962 2.45679C3.19987 3.18933 2.34539 4.23052 1.8408 5.4487C1.33622 6.66687 1.20419 8.00731 1.46143 9.30052C1.71866 10.5937 2.3536 11.7816 3.28595 12.714C4.2183 13.6463 5.40619 14.2813 6.6994 14.5385C7.9926 14.7957 9.33305 14.6637 10.5512 14.1591C11.7694 13.6545 12.8106 12.8 13.5431 11.7037C14.2757 10.6074 14.6667 9.31846 14.6667 7.99992C14.6667 7.12444 14.4942 6.25753 14.1592 5.4487C13.8242 4.63986 13.3331 3.90493 12.714 3.28587C12.095 2.66682 11.3601 2.17575 10.5512 1.84072C9.74238 1.50569 8.87548 1.33325 8 1.33325ZM10.4733 10.4733C10.4114 10.5357 10.3376 10.5853 10.2564 10.6192C10.1751 10.653 10.088 10.6705 10 10.6705C9.91199 10.6705 9.82485 10.653 9.74361 10.6192C9.66237 10.5853 9.58864 10.5357 9.52666 10.4733L8 8.93992L6.47333 10.4733C6.41104 10.535 6.33716 10.5839 6.25594 10.6171C6.17471 10.6503 6.08774 10.6671 6 10.6666C5.91226 10.6671 5.82528 10.6503 5.74406 10.6171C5.66284 10.5839 5.58896 10.535 5.52666 10.4733C5.46418 10.4113 5.41458 10.3375 5.38074 10.2563C5.34689 10.1751 5.32947 10.0879 5.32947 9.99992C5.32947 9.91191 5.34689 9.82477 5.38074 9.74353C5.41458 9.66229 5.46418 9.58856 5.52666 9.52659L7.06 7.99992L5.54666 6.47325C5.48494 6.41109 5.43607 6.33739 5.40283 6.25634C5.3696 6.17529 5.35265 6.08849 5.35296 6.0009C5.35327 5.9133 5.37083 5.82662 5.40464 5.74581C5.43844 5.665 5.48784 5.59164 5.55 5.52992C5.61216 5.4682 5.68586 5.41932 5.76691 5.38609C5.84796 5.35285 5.93476 5.33591 6.02235 5.33622C6.10995 5.33652 6.19663 5.35408 6.27744 5.38789C6.35825 5.4217 6.43161 5.47109 6.49333 5.53325L8 7.05325L9.50666 5.53992C9.56864 5.47743 9.64237 5.42784 9.72361 5.39399C9.80485 5.36015 9.89199 5.34272 9.98 5.34272C10.068 5.34272 10.1551 5.36015 10.2364 5.39399C10.3176 5.42784 10.3914 5.47743 10.4533 5.53992C10.5775 5.66483 10.6472 5.8338 10.6472 6.00992C10.6472 6.18604 10.5775 6.35501 10.4533 6.47992L8.94 7.99992L10.4733 9.53992C10.5955 9.66454 10.6639 9.83208 10.6639 10.0066C10.6639 10.1811 10.5955 10.3486 10.4733 10.4733Z"
        fill={fill}
      />
    </svg>
  );
};

CloseIcon.defaultProps = {
  width: 16,
  height: 16,
  fill: colors.grey05,
  wrapperFill: 'none'
};

export default CloseIcon;
