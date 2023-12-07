export interface NavigationTree {
  key: string;
  path: string;
  isExternalLink?: boolean;
  title: string;
  translateKey: string;
  icon: JSX.Element;
  type: 'title' | 'collapse' | 'item';
  authority: string[];
  subMenu: NavigationTree[];
  color?: string;
}

export type DropdownList = {
  key: string;
  label: string;
  path: string;
  icon: JSX.Element;
};
