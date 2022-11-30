export interface Post {
  id: string;
  title: string;
  date: string;
  body: string;
}

export type PostApi = Omit<Post, 'id'>