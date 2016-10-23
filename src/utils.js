import React, { Children } from 'react';

export const getDocumentSize = () => {
  const body = document.body;
  const html = document.documentElement;
  return {
    width: Math.max(body.scrollWidth, body.offsetWidth,
      html.clientWidth, html.scrollWidth, html.offsetWidth),
    height: Math.max(body.scrollHeight, body.offsetHeight,
      html.clientHeight, html.scrollHeight, html.offsetHeight),
  };
};

export const getViewportSize = () => ({
  width: window.innerWidth || 0,
  height: window.innerHeight || 0,
});

export const getScrollY = () => (
  typeof document !== 'undefined'
  ? (window.scrollY || document.documentElement.scrollTop || document.body.scrollTop)
  : 0
);

export const getScrollPercent = () => (
  typeof document !== 'undefined'
  ? ((getScrollY() / (getDocumentSize().height - getViewportSize().height)) * 100)
  : 0
);

export const injectProps = (elementOrFunction, props) => {
  if (typeof elementOrFunction === 'function') {
    return elementOrFunction(props);
  }
  return elementOrFunction
    ? React.cloneElement(Children.only(elementOrFunction), { ...props })
    : null;
};
