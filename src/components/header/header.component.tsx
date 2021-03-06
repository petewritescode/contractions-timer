import { StyledHeader, StyledHeading } from './header.styles';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../button/button.component';
import { Container } from '../container/container.component';
import { IconType } from '../../models/icon-type.model';
import { modalActions } from '../../store/modal/modal.slice';
import { ModalType } from '../../models/modal-type.model';
import React from 'react';
import { timerSelectors } from '../../store/timer/timer.selectors';
import { useView } from '../../hooks/view.hook';
import { View } from '../../models/view.model';
import { VIEW_TO_HEADING_MAP } from '../../constants/view.constants';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const view = useView();

  const heading = VIEW_TO_HEADING_MAP[view];
  const showClearButton = view === View.History;
  const clearButtonDisabled = !useSelector(timerSelectors.hasCompletedContractions);

  const handleClearClick = () => {
    dispatch(modalActions.open(ModalType.ClearHistory));
  };

  return (
    <Container padded>
      <StyledHeader>
        <StyledHeading>{heading}</StyledHeading>

        {showClearButton && (
          <Button label="Clear" icon={IconType.Clear} disabled={clearButtonDisabled} onClick={handleClearClick} />
        )}
      </StyledHeader>
    </Container>
  );
};
