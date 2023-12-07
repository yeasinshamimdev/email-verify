import {
  ColorLevel,
  ControlSize,
  Direction,
  LayoutType,
  Mode,
  NavMode,
} from '@/@types/theme';
import { NAV_MODE_THEMED, THEME_ENUM } from '@/constants/theme.constant';

export type ThemeConfig = {
  themeColor: string;
  direction: Direction;
  mode: Mode;
  primaryColorLevel: ColorLevel;
  panelExpand: boolean;
  navMode: NavMode;
  controlSize: ControlSize;
  cardBordered: boolean;
  layout: {
    type: LayoutType;
    sideNavCollapse: boolean;
  };
};

/**
 * Since some configurations need to be match with specific themes,
 * we recommend to use the configuration that generated from demo.
 */
export const themeConfig: ThemeConfig = {
  themeColor: 'indigo',
  navMode: NAV_MODE_THEMED,
  direction: THEME_ENUM.DIR_LTR,
  mode: THEME_ENUM.MODE_LIGHT,
  primaryColorLevel: 600,
  cardBordered: true,
  panelExpand: false,
  controlSize: 'md',
  layout: {
    type: THEME_ENUM.LAYOUT_TYPE_SIMPLE,
    sideNavCollapse: false,
  },
};
