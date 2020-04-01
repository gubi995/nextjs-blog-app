import Router from 'next/router';

export const navigateAndScrollTop = async (url: string, as?: string) => {
  await Router.push(url, as);

  window.scrollTo(0, 0);
};
