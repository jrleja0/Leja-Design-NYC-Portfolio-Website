
export const handleImageOnLoad = (event) => {
  const img = event.target;
  const previousSibling = img.previousSibling;
  if (previousSibling && previousSibling.className === 'div-spinner') {
    previousSibling.style.display = 'none';
  }
  img.style.visibility = 'visible';
};
