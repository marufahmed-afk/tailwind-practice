import React from 'react';

type CustomLinkProps = {
  children: React.ReactChild;
  url: string;
};

const CustomLink = ({ children, url }: CustomLinkProps) => {
  return (
    <a href={url} className="hover:text-white">
      {children}
    </a>
  );
};

export default CustomLink;
