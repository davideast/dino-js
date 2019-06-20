import * as React from 'react';

export function BlogHeader() {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center py-8 px-2">
        <h2 id="blogTitle" className="text-purple fadeInDown">My Blog</h2>
        <img id="logo" className="fadeInUp" src="/planet.png" />
      </div>
      <div className="container mx-auto h-1 bg-pink my-2"></div>
    </header>
  );
}
