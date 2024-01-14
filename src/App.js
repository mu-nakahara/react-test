import '@aws-amplify/ui-react/styles.css';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Routes, Route, Link  } from "react-router-dom";

import Home from "./components/Home";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

function App({ signOut, user }) {
  return (
    <div className="App">
      <h2>Hello {user.username}</h2>
      <button onClick={signOut}>Sign out</button>
      <br />
      <Link to="/">HOME</Link>
      &nbsp;
      <Link to="page1">PAGE1</Link>
      &nbsp;
      <Link to="page2">PAGE2</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </div>
  );
}

// export default App;
export default withAuthenticator(App)
