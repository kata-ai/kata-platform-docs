// tslint:disable: max-line-length
import React from 'react';
import styled from '../../utils/styled';
import { colors } from '../../styles/variables';

interface UpdateIconProps {
  iconType?: string;
  large?: boolean;
  withImage?: boolean;
}

function getBackgroundcolor(colorKey?: string) {
  switch (colorKey) {
    case 'major': {
      return colors.red01;
    }
    case 'minor': {
      return colors.yellow02;
    }
    case 'patch': {
      return colors.green01;
    }
    default: {
      return colors.neutral02;
    }
  }
}

function getIconColor(colorKey?: string) {
  switch (colorKey) {
    case 'minor': {
      return colors.neutral08;
    }
    default: {
      return colors.neutral01;
    }
  }
}

const UpdateIcon: React.FC<UpdateIconProps> = ({ withImage, ...rest }) => (
  <Root {...rest} withImage={withImage}>
    {withImage ? (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <defs>
          <path
            id="a"
            d="M3 5a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2H3zm2-3a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2H5zM2 14h12V8H2v6zm13-8H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"
          />
        </defs>
        <g fill="none" fillRule="evenodd" transform="translate(4 4)">
          <mask id="b" fill={getIconColor(rest.iconType)}>
            <use xlinkHref="#a" />
          </mask>
          <use fill={getIconColor(rest.iconType)} xlinkHref="#a" />
          <g fill={getIconColor(rest.iconType)} mask="url(#b)">
            <path d="M-2-4h24v24H-2z" />
          </g>
        </g>
      </svg>
    ) : null}
  </Root>
);

const Root = styled<UpdateIconProps, 'div'>('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => (props.large ? '40px' : '24px')};
  height: ${props => (props.large ? '40px' : '24px')};
  font-size: 1rem;
  line-height: 1;
  vertical-align: middle;
  border-radius: 50%;
  background-color: ${props => getBackgroundcolor(props.iconType)};
  overflow: hidden;
`;

export default UpdateIcon;
