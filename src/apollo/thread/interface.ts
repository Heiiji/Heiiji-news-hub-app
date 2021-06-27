export interface IThread {
  id: string;
  name: string;
  description: string;
  language: string;
  image: string;
  domain: string;
  url: string;
  status: string;
  tags: Array<string>;
  private: boolean;
}
