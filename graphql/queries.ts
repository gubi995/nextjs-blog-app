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
