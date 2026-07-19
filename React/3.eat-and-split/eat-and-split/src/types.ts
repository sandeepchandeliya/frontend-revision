export interface FriendsType {
  id: number;
  name: string;
  image: string;
  balance: number;
}

export interface FriendsListProp {
  friends: FriendsType[];
  onSelect: (friend: FriendsType) => void;
  selectedFriend: FriendsType | null;
}

export interface FormSplitBillProps {
  selected: FriendsType;
  onSplit: (value: number) => void;
}
