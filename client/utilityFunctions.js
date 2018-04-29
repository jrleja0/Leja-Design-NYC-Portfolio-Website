import $ from 'jquery';

export const handleImageOnLoad = (event) => {
  const img = event.target;
  const previousSibling = img.previousSibling;
  if (previousSibling && previousSibling.className === 'div-spinner') {
    previousSibling.style.display = 'none';
  }
  img.style.visibility = 'visible';
};

export const handleSlideshowImageOnLoad = (() => {
  let imageNum = 6;
  const images = [];
  return (event) => {
    images.push(event.target);
    imageNum--;
    if (!imageNum) {
      window.setTimeout(() => {
        images.forEach(img => {
          img.style.visibility = 'visible';
        });
        const slideshowCover = document.getElementsByClassName('slideshow-cover')[0];
        slideshowCover.className += ' slideshow-cover-fade-out';
        slideshowCover.style.opacity = '0';
        window.setTimeout(() => {
          slideshowCover.style.zIndex = '-1';
        }, 2500);
        imageNum = 6;
      }, 1500);
    }
  };
})();

// returns if element is between window's top and bottom edges (boolean)
// checks both windowBottomEdge and windowTopEdge
export const elementOnScreenStrict = (el, offset) => {
  const windowTopEdge = $(window).scrollTop();
  const windowBottomEdge = windowTopEdge + $(window).height();

  el = $(el);
  const elTopEdge = el.offset().top + offset;

  return elTopEdge <= windowBottomEdge && elTopEdge >= (windowTopEdge - offset);
};

// checks only windowBottomEdge; used for home page background images
export const elementOnScreen = (el, offset) => {
  const windowTopEdge = $(window).scrollTop();
  const windowBottomEdge = windowTopEdge + $(window).height();

  el = $(el);
  const elTopEdge = el.offset().top + offset;

  return elTopEdge <= windowBottomEdge;
};

// returns if window viewport's width is greater than its height (boolean)
export const windowWidthIsGreaterThanHeight = () => {
  const widthMinusHeight = $(window).width() - $(window).height();
  return widthMinusHeight >= 0;
};
