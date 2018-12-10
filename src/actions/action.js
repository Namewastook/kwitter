import { push } from "connected-react-router";

// consts for registration
export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

// consts for login
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN = "LOGIN";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// const for update user
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";


//consts for profile.  push onto the history stack (to hit back a page)

const mapDispatchToProps = dispatch => {
  return {
    register: registerData => dispatch(register(registerData))
  };
};

export const register = registerData => dispatch => {
  // dispatch here before fetch
  dispatch({
    type: REGISTER
  });

  fetch("https://kwitter-api.herokuapp.com/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(registerData)
  })
    .then(res => {
      if (!res.ok) {
        res.json().then(err => {
          throw err;
        });
      }

      return res.json();
    })
    .then(data => {
      // dispatch here on success --
      dispatch({
        type: REGISTER_SUCCESS,
        register: data,
        result: "Successfully Registered!"
      });
    })
    .catch(err => {
      // dispatch here on fail --
      dispatch({
        type: REGISTER_FAIL,
        result: "Failed to Register!"
      });
    });
};

export const login = loginData => dispatch => {
  // dispatch here before fetch
  dispatch({
    type: LOGIN
  });

  fetch("https://kwitter-api.herokuapp.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginData)
  })
    .then(res => {
      if (!res.ok) {
        res.json().then(err => {
          throw err;
        });
      }

      return res.json();
    })
    .then(data => {
      // dispatch here on success --
      if (data.success === true) {
        dispatch({
          type: LOGIN_SUCCESS,
          loginData: data,
        
        });
        // logic for routing
        dispatch(push("/mainFeed"));
      } else {
        throw "nope.";
      }
    })
    .catch(err => {
      // dispatch here on fail --
      dispatch({
        type: LOGIN_FAILURE,
        loginResult: "You shall not pass!"
      });
    });
};

// the newUserData is only for the text boxes.  the image will be in a separate endpoint.

// newUserData is a reference to the body or value being passed in (component information which is responsible for grabbing data out of input boxes and sending it to the action creator.)
export const updateUser = newUserData => (dispatch, getState) => {
  const token = getState().loginData.token;
  dispatch({
    type: UPDATE_USER
  });

  fetch("https://kwitter-api.herokuapp.com/users", {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUserData)
  })
    .then(res => {
      if (!res.ok) {
        res.json().then(err => {
          throw err;
        });
      }

      return res.json();
    })
    .then(data => {
      // dispatch here on success --
      dispatch({
        type: UPDATE_USER_SUCCESS,
        displayName: data.user.displayName
      });
      // logic for routing when dealing with asych functions. 
      dispatch(push("/mainFeed"));
    })
    .catch(err => {
      // dispatch here on fail --
      dispatch({
        type: UPDATE_USER_FAILURE,
        updateResult: "no one likes you"
      });
    });
};
