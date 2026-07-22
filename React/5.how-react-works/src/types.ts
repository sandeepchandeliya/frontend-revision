export interface TabbedProp {
  content: {
    summary: string;
    details: string;
  }[];
}

export interface TabProp {
  num: number;
  activeTab: number;
  onClick: (num: number) => void;
}

export interface ItemProp {
  item?: {
    summary: string;
    details: string;
  };
}
