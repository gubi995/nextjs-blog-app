export interface Blog {
  id: string;
  title: string;
  createdAt: string;
  introduction: string;
  content: string;
  slug: string;
  image: {
    url: string;
  };
}
