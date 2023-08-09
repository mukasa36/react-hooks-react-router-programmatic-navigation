import React from "react";
import { Route, Redirect } from "react-router-dom";

function Home({ isSignedIn }) {
  // if the user isn't signed in, redirect them to the login page
  if (!isSignedIn) return <Redirect to="/login" />;

  // otherwise, return the home page
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

// Wrap the Home component inside a Route component
function App() {
  const isSignedIn = true; 
  return (
    <Route exact path="/">
      <Home isSignedIn={isSignedIn} />
    </Route>
  );
}

export default App;
