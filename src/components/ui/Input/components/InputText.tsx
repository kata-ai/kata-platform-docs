import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'utils/variables';
import { Omit } from 'utility-types';
import SearchIcon from 'components/layout/Header/SearchIcon';
import CloseIcon from 'components/layout/Header/CloseIcon';

export interface InputTextProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  block?: boolean;
  clearable?: boolean;
  onClearButtonClick?: () => void;
}

const Icon = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 16px;
  top: 0;
  bottom: 0;
  left: auto;
`;

const CloseButton = styled('button')`
  display: flex;
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  width: 16px;
  height: 16px;
  cursor: pointer;

  svg {
    path {
      fill: ${colors.grey03};
    }
  }

  &:hover,
  &:focus {
    outline: none;

    svg {
      path {
        fill: ${colors.grey05};
      }
    }
  }
`;

const Root = styled('div')<{ disabled?: boolean; block?: boolean }>`
  display: ${props => (props.block ? 'block' : 'inline-block')};
  position: relative;

  ${Icon} {
    path {
      fill: ${colors.grey03};
    }
  }

  &:hover,
  &:focus,
  &:active {
    ${Icon} {
      path {
        fill: ${colors.grey05};
      }
    }
  }
`;

const Input = styled('input')`
  display: inline-block;
  position: relative;
  padding: 8px 36px 8px 16px;
  height: 40px;
  background-color: ${colors.white};
  color: ${colors.grey07};
  border: 1px solid ${colors.grey03};
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;

  ${Icon} {
    path {
      fill: ${colors.grey03};
    }
  }

  &:not(:disabled):not(.disabled) {
    &::placeholder {
      color: ${colors.grey03};
    }

    ${Icon} {
      path {
        fill: ${colors.grey03};
      }
    }

    &:hover,
    &:focus,
    &:active {
      &::placeholder {
        color: ${colors.grey05};
      }

      ${Icon} {
        path {
          fill: ${colors.grey05};
        }
      }
    }

    &:hover {
      border-color: ${colors.grey05};
    }

    &:focus,
    &:active {
      border-color: ${colors.blue07};
      outline: none;
    }
  }

  &:disabled,
  &.disabled {
    background-color: ${colors.grey01};
    border-color: ${colors.grey02};
    cursor: not-allowed;

    &::placeholder {
      color: ${colors.grey03};
    }

    ${Icon} {
      path {
        fill: ${colors.grey03};
      }
    }
  }
`;

function InputText(
  { className, style, block, clearable, onClearButtonClick, value, ...rest }: InputTextProps,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <Root className={className} style={style} block={block}>
      <Input type="text" {...rest} ref={ref} />
      {clearable ? (
        <Icon
          onClick={() => {
            if (onClearButtonClick) {
              onClearButtonClick();
            }
          }}
        >
          <CloseButton>
            <CloseIcon height={16} width={16} />
          </CloseButton>
        </Icon>
      ) : value ? (
        <Icon
          onClick={() => {
            if (onClearButtonClick) {
              onClearButtonClick();
            }
          }}
        >
          <CloseButton>
            <CloseIcon height={16} width={16} />
          </CloseButton>
        </Icon>
      ) : (
        <Icon>
          <SearchIcon height={16} width={16} />
        </Icon>
      )}
    </Root>
  );
}

export default React.forwardRef(InputText);
