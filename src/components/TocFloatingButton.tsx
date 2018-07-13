import React from 'react';
import styled from 'utils/styled';

interface ToggleableProps {
  isOpen?: boolean;
}

const Wrapper = styled<ToggleableProps, 'button'>('button')`
  display: inline-block;
  position: fixed;
  bottom: 24px;
  right: 24px;
  padding: 0;
  background-color: ${props =>
    props.isOpen ? props.theme.colors.error : props.theme.colors.brand};
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  z-index: ${props => props.theme.zIndex.floatingButton};
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.15);

  &:hover,
  &:focus {
    outline: none;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}px) {
    display: none;
  }
`;

const Inner = styled<ToggleableProps, 'div'>('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;

  transition: transform 0.3s ease;

  & svg {
    g {
      fill: ${props => props.theme.colors.white};
    }
  }
`;

interface TocFloatingButtonProps {
  className?: string;
  tocIsOpen?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const TocFloatingButton: React.SFC<TocFloatingButtonProps> = ({
  className,
  tocIsOpen,
  onClick
}) => (
  <Wrapper
    className={className}
    onClick={onClick}
    isOpen={tocIsOpen}
    aria-label="Toggle Table of Contents"
  >
    <Inner isOpen={tocIsOpen}>
      {tocIsOpen ? (
        <svg width="24px" height="24px" viewBox="0 0 24 24">
          <g fill="none" fill-rule="evenodd">
            {/* tslint:disable:max-line-length */}
            <rect
              id="Rectangle-Copy"
              transform="translate(11.748851, 11.748851) rotate(-315.000000) translate(-11.748851, -11.748851) "
              x="-3.02037964"
              y="9.90269729"
              width="29.5384615"
              height="3.69230769"
              rx="1.84615385"
            />
            <rect
              id="Rectangle-Copy"
              transform="translate(11.748851, 11.748851) scale(-1, 1) rotate(-315.000000) translate(-11.748851, -11.748851) "
              x="-3.02037964"
              y="9.90269729"
              width="29.5384615"
              height="3.69230769"
              rx="1.84615385"
            />
            {/* tslint:enable:max-line-length */}
          </g>
        </svg>
      ) : (
        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            {/* tslint:disable:max-line-length */}
            <path
              d="M20,0 L4,0 C1.794,0 0,1.794 0,4 L0,20 C0,22.206 1.794,24 4,24 L20,24 C22.206,24 24,22.206 24,20 L24,4 C24,1.794 22.206,0 20,0 M20,2 C21.1,2 22,2.9 22,4 L22,20 C22,21.1 21.1,22 20,22 L4,22 C2.9,22 2,21.1 2,20 L2,4 C2,2.9 2.9,2 4,2 L20,2"
              id="Fill-1"
            />
            <path
              d="M7,7 L17,7 C17.55,7 18,6.55 18,6 C18,5.45 17.55,5 17,5 L7,5 C6.45,5 6,5.45 6,6 C6,6.55 6.45,7 7,7"
              id="Fill-3"
            />
            <path
              d="M17,9 L7,9 C6.45,9 6,9.45 6,10 C6,10.55 6.45,11 7,11 L17,11 C17.55,11 18,10.55 18,10 C18,9.45 17.55,9 17,9"
              id="Fill-5"
            />
            <path
              d="M17,13 L7,13 C6.45,13 6,13.45 6,14 C6,14.55 6.45,15 7,15 L17,15 C17.55,15 18,14.55 18,14 C18,13.45 17.55,13 17,13"
              id="Fill-7"
            />
            <path
              d="M13,17 L7,17 C6.45,17 6,17.45 6,18 C6,18.55 6.45,19 7,19 L13,19 C13.55,19 14,18.55 14,18 C14,17.45 13.55,17 13,17"
              id="Fill-9"
            />
            {/* tslint:enable:max-line-length */}
          </g>
        </svg>
      )}
    </Inner>
  </Wrapper>
);

export default TocFloatingButton;
