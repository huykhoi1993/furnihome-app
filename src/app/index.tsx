/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { nanoid } from '@reduxjs/toolkit';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import { Footer } from './components/Footer/Loadable';
import { Header } from './components/Header/Loadable';
import { Heading } from './components/Heading/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { AboutPage } from './pages/AboutPage/Loadable';
import { BlogPage } from './pages/BlogPage/Loadable';
import { ContactPage } from './pages/ContactPage/Loadable';
import { HomePage } from './pages/HomePage/Loadable';
import { ShopPage } from './pages/ShopPage/Loadable';
import { TeamPage } from './pages/TeamPage/Loadable';

export const HOME_PATH = '/';
export const SHOP_PATH = '/shop';
export const ABOUT_PATH = '/about';
export const TEAM_PATH = '/team';
export const BLOG_PATH = '/blog';
export const CONTACT_PATH = '/contact';

export const ROUTES = [
  {
    id: nanoid(),
    exact: true,
    path: HOME_PATH,
    component: HomePage,
    name: 'home',
  },
  {
    id: nanoid(),
    path: SHOP_PATH,
    component: ShopPage,
    name: 'shop',
  },
  {
    id: nanoid(),
    path: ABOUT_PATH,
    component: AboutPage,
    name: 'about',
  },
  {
    id: nanoid(),
    path: TEAM_PATH,
    component: TeamPage,
    name: 'team',
  },
  {
    id: nanoid(),
    path: BLOG_PATH,
    component: BlogPage,
    name: 'blog',
  },
  {
    id: nanoid(),
    path: CONTACT_PATH,
    component: ContactPage,
    name: 'contact',
  },
  {
    id: nanoid(),
    component: NotFoundPage,
  },
];

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap"
        />
      </Helmet>

      {/* header section starts  */}
      <Header />
      {/* header section ends  */}

      <Heading />

      <Switch>
        {ROUTES.map(({ id, ...props }) => (
          <Route {...props} key={id} />
        ))}
      </Switch>

      {/* footer section starts  */}
      <Footer />
      {/* footer section ends */}
      <GlobalStyle />
    </BrowserRouter>
  );
}
