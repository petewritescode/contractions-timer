import { borderRadius, color, fontSize, pxToRem, spacing } from '../../theme/helpers/theme.helpers';
import styled from 'styled-components';

export const StyledBackground = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: ${spacing('xl')} ${spacing('l')};
  overflow: auto;
  background-color: ${color('neutralMax50')};
`;

export const StyledDialog = styled.div`
  position: relative;
  width: 100%;
  max-width: ${pxToRem(500)};
  margin-right: auto;
  margin-left: auto;
  padding: ${spacing('l')};
  border-radius: ${borderRadius('m')};
  background-color: ${color('neutralMin')};
  color: ${color('neutralMid2')};
`;

export const StyledHeader = styled.header`
  display: flex;
  margin-bottom: ${spacing('l')};
`;

export const StyledHeading = styled.h1`
  flex-grow: 1;
  font-size: ${fontSize('l')};
  font-weight: bold;
`;

export const StyledClose = styled.div`
  margin-left: ${spacing('l')};
`;

export const StyledCloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -${spacing('m')};
  padding: ${spacing('m')};
`;

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row-reverse;
  margin-top: ${spacing('l')};
`;

export const StyledSecondaryButton = styled.div`
  margin-right: ${spacing('s')};
`;
