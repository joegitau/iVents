export interface IEvent {
  id: number;
  name: string;
  date?: string;
  price: number;
  imageUrl?: string;
  sessions?: any[];
}
