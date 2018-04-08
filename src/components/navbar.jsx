import React from 'react';

export default function NavBar(title) {
  return (
    <div className="navbar navbar-fixed-top">
      <a href="/" className="navbar-brand">{title.title}</a>
    </div>
  );
}
