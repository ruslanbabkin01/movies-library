export interface IResponseReviews<T> {
  id: number;
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
export interface IRewiew {
  author: string;
  author_details: IAuthorDetails;
  content: string;
  created_at: Date;
  id: string;
  updated_at: Date;
  url: string;
}

export interface IAuthorDetails {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
}
