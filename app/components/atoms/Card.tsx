import React from 'react';

const Card = () => {
  return (
    <div className="w-[300px] rounded-lg border-2 border-blue-300 p-5 ">
      <h1 className="text-xl font-bold">Title</h1>
      <p className="text-sm text-blue-500 line-clamp-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto error
        molestiae et sequi, obcaecati velit accusantium, suscipit modi totam
        optio quisquam quis id? Veniam optio nisi accusamus accusantium deserunt
        ex.
      </p>
    </div>
  );
};

export default Card;
