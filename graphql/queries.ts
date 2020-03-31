export const GET_BLOGS = `
  {
    blogs {
      id
      title
      createdAt
      introduction
      image {
        url
      }
    }
  }
`;

export const GET_BLOG_IDS = `
  {
    blogs {
      id
    }
  }
`;

export const GET_BLOG = `
  query GetBlog($id: ID!){
    blog(where: {id: $id}) {
      title,
      createdAt,
      content{
        html
      }
      image{
        url,
      }
    }
  }
`;
