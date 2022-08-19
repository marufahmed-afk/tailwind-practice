import React from 'react';
import Card from '../app/components/atoms/Card';

const cards = () => {
  return (
    <div className="container mt-10 flex min-w-[599px] flex-row  flex-wrap gap-5 ">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default cards;
