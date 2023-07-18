import DetailsConfirmation from "./components/StudentModel/StudentRegistration/steps/DetailsConfirmation/DetailsConfirmation";
import EmailVerification from "./components/StudentModel/StudentRegistration/steps/EmailVerification/EmailVerification";
import { Routes, Route } from "react-router-dom";
import PasswordSetup from "./components/StudentModel/StudentRegistration/steps/PasswordSetup/PasswordSetup";
import NavBar from "./components/lib/NavBar/NavBar";
import StudentHome from "./pages/studentModel/studentHome/studentHome";
import './App.css'

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes exact path={['/', '/student-details', '/set-password']}>
        <Route exact path="/" element={<EmailVerification />} render={() => null} ></Route>
        <Route path="/student-details" element={<DetailsConfirmation />} render={() => null} ></Route>
        <Route path="/set-password" element={<PasswordSetup />} render={() => null} ></Route>
        <Route exact path="/student/dashboard" element={<StudentHome />} />
      </Routes>
    </div>
  )
}

export default App
