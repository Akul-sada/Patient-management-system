import { useState } from "react";
import Manager from "./Manager";
import AuthContext from "./auth-context";
import LoginForm from "./components/LoginForm";
import { BrowserRouter,Route,Routes } from "react-router-dom";


function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />}>
          <Route index element={<LoginForm />} />

        </Route>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
