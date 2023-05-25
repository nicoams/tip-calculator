import React from 'react';
import Form from './form';
import Results from './result';

import '../css/card.scss';

export default function Card() {
  return (
    <main className="content-wrapper">
      <Form />
      <Results />
    </main>
  );
}
