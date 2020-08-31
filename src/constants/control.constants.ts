import { IconType } from '../models/icon-type.model';
import { PrimaryControlType } from '../models/primary-control-type.model';

export const PRIMARY_CONTROL_TYPE_TO_ICON_TYPE_MAP: Record<PrimaryControlType, IconType> = {
    [PrimaryControlType.Start]: IconType.Start,
    [PrimaryControlType.Stop]: IconType.Stop,
};
