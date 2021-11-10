export interface ApiProps {
  url: string;
  data?: object;
}

export interface HeadersProps {
  headers: {
    Authorization: string;
  };
}
