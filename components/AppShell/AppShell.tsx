import React, { HTMLProps } from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, useMediaQuery } from '@material-ui/core';

import LinksDesktop from './LinksDesktop';
import LinksMobile from './LinksMobile';
import AppLogo from './AppLogo';

interface Props extends HTMLProps<HTMLDivElement> {
  pageTitle: string;
}

const AppShell = ({ pageTitle, children }: Props) => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <AppLogo />
          {matches ? <LinksDesktop /> : <LinksMobile />}
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

export default AppShell;
