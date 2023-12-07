interface IHeader {
  title: string;
  el?: JSX.Element | string;
  path?: string;
  tooltip?: React.ReactNode;
}

export interface IUserCommonBox {
  header: IHeader;
  children?: React.ReactNode;
}

export const userBoxShadow =
  '0 0 0 1px rgba(50, 50, 95, 0.02), 0 6px 8px -2px rgba(50, 50, 95, 0.08), 0 3px 4px -1px rgba(0, 0, 0, 0.04)';

export const userCommonBoxStyle = {
  borderRadius: '8px',
  boxShadow: userBoxShadow,
  backgroundColor: '#ffffff',
};
