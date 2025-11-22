import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Feed from "./components/Feed";
import Body from "./components/Body";
import EditProfile from "./components/EditProfile";
import Connection from "./components/Connection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/connection" element={<Connection />} />
              <Route path="/editProfile" element={<EditProfile />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
