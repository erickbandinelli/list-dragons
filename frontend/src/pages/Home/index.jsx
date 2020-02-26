import React from 'react';
import Header from '../../components/Header';
import ListMovies from '../../components/movies';

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <ListMovies />
    </React.Fragment>
  );
};
