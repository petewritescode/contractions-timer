import { NAV_LINK_TYPE_TO_ICON_TYPE_MAP, NAV_LINK_TYPE_TO_LABEL_MAP } from '../../../constants/nav.constants';
import React, { FunctionComponent } from 'react';
import { StyledIcon, StyledNavLink } from './nav-link.styles';
import { Icon } from '../../icon/icon.component';
import { IconSize } from '../../../models/icon-size.model';
import { NavLinkType } from '../../../models/nav-link-type.model';
import { noop } from '../../../utils/noop.util';

interface Props {
    type: NavLinkType,
    active?: boolean;
    onClick?: () => void;
}

export const NavLink: FunctionComponent<Props> = ({ type, active, onClick = noop }) => {
    const iconType = NAV_LINK_TYPE_TO_ICON_TYPE_MAP[type];
    const label = NAV_LINK_TYPE_TO_LABEL_MAP[type];

    return (
        <StyledNavLink active={active} onClick={onClick}>
            <StyledIcon>
                <Icon type={iconType} size={IconSize.Medium} />
            </StyledIcon>

            {label}
        </StyledNavLink>
    );
};
