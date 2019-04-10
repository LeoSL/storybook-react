import React, { Fragment } from 'react';
import Card from './Card.jsx';

export default function Home({
  cardsInfo,
}) {
  return (
    <Fragment>
      <h1>Here's a Card!</h1>
      <Card text="LeoSL" link="https://www.google.com" />
    </Fragment>
  );
}

