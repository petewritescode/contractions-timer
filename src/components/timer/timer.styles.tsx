import { breakpoint, fontSize, pxToRem, spacing } from '../../theme/helpers/theme.helpers';
import styled, { css } from 'styled-components';

export const StyledTimer = styled.div`
  display: flex;
  position: relative;
  z-index: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${pxToRem(140)};
  height: ${pxToRem(140)};
  margin-right: auto;
  margin-left: auto;

  ${breakpoint('s', css`
    width: ${pxToRem(180)};
    height: ${pxToRem(180)};
  `)}

  ${breakpoint('m', css`
    width: ${pxToRem(220)};
    height: ${pxToRem(220)};
  `)}

  ${breakpoint('l', css`
    width: ${pxToRem(260)};
    height: ${pxToRem(260)};
  `)}
`;

export const StyledStatusIndicator = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const StyledLabel = styled.div`
  margin-top: ${spacing('s')};
  font-size: ${fontSize('s')};
  text-transform: uppercase;

  ${breakpoint('s', css`
    font-size: ${fontSize('m')};
  `)}

  ${breakpoint('l', css`
    font-size: ${fontSize('l')};
  `)}
`;
