import React from 'react';

export default function Layout(props){
  return (
    <div id="layout-base" className="site-layout-background">
      {props.children}
    </div>
  );
};