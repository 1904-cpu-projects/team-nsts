import axios from 'axios';

// This is just to hook in some methods into the main store
import store from '../store';

// Const defines here
export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';

// Actions

// This sets user information that is received from the server
// isAdmin: is initially 'guest' and can only otherwise be 'user' or 'admin'
export const loadUser = (user) => ({
  type: SET_USER,
  user,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post('/api/login/login', { email, password });
    store.dispatch(loadUser(response.data));
  } catch (e) {
    console.log('something did not go right');
  }
};

export const logoutUser = async () => {
  try {
    const response = axios.get('/api/login/logout');
    store.dispatch(removeUser());
  } catch (e) {
    console.log('Logout should never fail');
  }
};

// helper function that gets products based on productsReducer
export const checkSessionLogin = async () => {
  try {
    const result = await axios.get('/api/login/checkLoggedIn');
    store.dispatch(loadUser(result.data));
  } catch (e) {
    console.log('Nick has no clue what he is doing', e);
  }
};

const init = {
  id: undefined,
  isAdmin: false,
};

// And of course the reducer
export default (user = init, action) => {
  let newUser = { ...user };
  switch (action.type) {
    case SET_USER:
      newUser = { ...action.user };
      break;
    case REMOVE_USER:
      newUser = { id: undefined, isAdmin: false };
      break;
  }
  return newUser;
};
