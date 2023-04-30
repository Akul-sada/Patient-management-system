import { useState } from "react";
import Manager from "./Manager";
import LoginForm from "./components/LoginForm";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import AddPatient from "./components/AddPatient";
import EditPatient from "./components/EditPatient";
import DeletePatient from "./components/DeletePatient";


function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />}/>
        <Route path="/manager" element={<Manager/>}/>
        <Route path="/add-patient" element={<AddPatient/>}/>
        <Route path="/edit-patient" element={<EditPatient/>}/>
        <Route path="/delete-patient" element={<DeletePatient/>}/>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
