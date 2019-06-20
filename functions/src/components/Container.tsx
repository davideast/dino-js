import * as React from 'react';

export function Container(props) {
  return (
    <div className="container mx-auto px-2">
      {props.children}
    </div>
  )
}
