import * as tippy from 'tippy.js';

const selector = `*[title]`;

export const generateTooltips = (element: HTMLElement | Document | null = document) => {
  element = element ? element : document;
  const elements = Array.from(element.querySelectorAll(selector));
  return tippy(elements, {
    position: 'top',
    animation: 'fade',
    duration: 100,
    arrow: true,
    dynamicTitle: true
  });
};
