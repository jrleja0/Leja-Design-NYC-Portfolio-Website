import axios from 'axios';

// ---------- ACTION TYPES ----------
const LOAD_IMAGES = 'LOAD_IMAGES';

// ---------- ACTION CREATORS ----------
const loadImages = imagesList => ({ type: LOAD_IMAGES, imagesList });

// ---------- INIT STATE ----------
const initState = {
  imagesList: []
};

// ---------- DISPATCHERS ----------
export const fetchImages = () =>
  dispatch =>
    axios.get('/api/images')
      .then(res => dispatch(loadImages(res.data || [] )))
      .catch(console.error.bind(console));

// ---------- REDUCER ----------
export default function (state = initState, action) {
  const newState = Object.assign({}, state );
  switch (action.type) {
    case LOAD_IMAGES:
      newState.imagesList = action.imagesList;
      break;

    default:
      return newState;
  }
  return newState;
}
