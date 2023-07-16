export type Log = {
  id: number;
  date: string;
  items: LogItem[];
};

export type LogItem = {
  id: number;
  date: string;
  itemName: string;
  servings: number;
  thumbnail: string;
};
