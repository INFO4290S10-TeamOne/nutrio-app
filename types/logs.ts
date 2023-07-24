export type Log = {
  id: number;
  date: string;
  items: LogItem[];
};

export type LogItem = {
  id: number;
  itemName: string;
  servings: number;
  thumbnail: string;
};
