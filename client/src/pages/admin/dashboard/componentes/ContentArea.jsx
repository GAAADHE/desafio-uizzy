import React from 'react';

export default function Layout(props){
  return (
    <div id="ContentArea">
      {props.children}
    </div>
  );
};