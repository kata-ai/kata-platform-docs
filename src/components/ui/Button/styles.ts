import { css } from 'styled-components';
import { textSizes, colors } from 'utils/variables';

export type ButtonVariants = 'default' | 'primary' | 'outline' | 'destructive' | 'link' | 'ghost';
export type ButtonSizes = 'sm' | 'md' | 'lg';

export interface ButtonBaseProps {
  /** Is a block button. */
  block?: boolean;
  /** The variant of the button. */
  variant?: ButtonVariants;
  /** The size of the button. */
  size?: ButtonSizes;
}

export const DefaultButton = css`
  background-color: ${colors.grey02};
  color: ${colors.grey06};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.grey03};
      color: ${colors.grey06};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      border-color: ${colors.blue05};
      box-shadow: 0px 0px 2px ${colors.blue05};
    }
  }

  &:disabled,
  &.disabled {
    background-color: ${colors.grey03};
    color: ${colors.grey04};
  }
`;

export const PrimaryButton = css`
  background-color: ${colors.blue08};
  color: ${colors.white};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.blue09};
      color: ${colors.white};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      box-shadow: 0px 0px 2px ${colors.blue05};
    }
  }

  &:disabled,
  &.disabled {
    background-color: ${colors.grey03};
    color: ${colors.grey04};
  }
`;

export const OutlineButton = css`
  background-color: ${colors.white};
  color: ${colors.grey06};
  border-color: ${colors.indigo02};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.blue01};
      color: ${colors.grey06};
      border-color: ${colors.indigo02};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      box-shadow: 0px 0px 2px ${colors.blue05};
    }
  }

  &:disabled,
  &.disabled {
    background-color: ${colors.grey02};
    color: ${colors.grey04};
    border-color: ${colors.grey03};
  }
`;

export const LinkButton = css`
  color: ${colors.blue05};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      color: ${colors.blue05};
      text-decoration: underline;
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      box-shadow: 0px 0px 2px ${colors.blue05};
    }
  }

  &:disabled,
  &.disabled {
    color: ${colors.grey04};
  }
`;

export const DestructiveButton = css`
  background-color: ${colors.red05};
  color: ${colors.white};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.red06};
      color: ${colors.white};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      box-shadow: 0px 0px 2px ${colors.blue05};
    }
  }

  &:disabled,
  &.disabled {
    background-color: ${colors.grey03};
    color: ${colors.grey04};
  }
`;

export const GhostButton = css`
  color: ${colors.blue05};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.grey02};
      color: ${colors.blue05};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      box-shadow: 0px 0px 2px ${colors.blue05};
    }
  }

  &:disabled,
  &.disabled {
    color: ${colors.grey04};
  }
`;

export const SizeSmall = css`
  height: 32px;
  padding: 0 12px;
  font-size: ${textSizes[200].fontSize}px;
  line-height: 30px;
  border-radius: 4px;
`;

export const SizeMedium = css`
  height: 40px;
  padding: 0 16px;
  font-size: ${textSizes[300].fontSize}px;
  line-height: 38px;
  border-radius: 4px;
`;

export const SizeLarge = css`
  height: 56px;
  padding: 0 24px;
  font-size: ${textSizes[400].fontSize}px;
  line-height: 54px;
  border-radius: 4px;
`;

export const ButtonBase = css`
  display: inline-block;
  position: relative;
  margin: 0;
  padding: 0;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  background: none;
  text-decoration: none;
  letter-spacing: -0.05px;
  border: 1px solid transparent;

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:focus {
    outline: 0px;
  }
`;

export const ButtonStyles = (props: ButtonBaseProps) => css`
  ${ButtonBase}

  ${props.variant === 'default' && DefaultButton}
  ${props.variant === 'primary' && PrimaryButton}
  ${props.variant === 'outline' && OutlineButton}
  ${props.variant === 'destructive' && DestructiveButton}
  ${props.variant === 'link' && LinkButton}
  ${props.variant === 'ghost' && GhostButton}

  ${props.size === 'sm' && SizeSmall}
  ${props.size === 'md' && SizeMedium}
  ${props.size === 'lg' && SizeLarge}
`;
