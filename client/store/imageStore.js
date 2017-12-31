import axios from 'axios';

const processProjectTitles = projects => {
  projects.forEach(project => {
    const projectSplit = project.projectName.split('//');
    project.projectTitle = projectSplit.join(' ');
    project.projectHeading = projectSplit;
  });
  return projects;
};

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
      .then(res => processProjectTitles(res.data))
      .then(projImages => dispatch(loadImages(projImages || [] )))
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
