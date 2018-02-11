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
    }
  };
})();
