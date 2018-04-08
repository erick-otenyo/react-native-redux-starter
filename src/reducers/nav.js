import Navigator from "../navigation/Navigator";

const initialState = Navigator.router.getStateForAction(
  Navigator.router.getActionForPathAndParams("Home")
);

const navReducer = (state = initialState, action) => {
  const nextState = Navigator.router.getStateForAction(action, state);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default navReducer;
