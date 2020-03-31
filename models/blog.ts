export interface Blog {
  id: string;
  title: string;
  createdAt: string;
  introduction: string;
  content: { html: string };
  slug: string;
  image: {
    url: string;
  };
}
