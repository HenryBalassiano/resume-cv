import {useState} from "react";
import PersonalInfo from "./components/personal-info/PersonalInfo";
import Education from "./components/personal-info/Education.tsx";
import Resume from "./components/resume/Resume.tsx";
import Expierence from "./components/personal-info/Expierence.tsx";

function App() {
  const [formData, setFormData] = useState([
    {
      company: "New York Universesty",
      position: "eat ass",
      id: 0,
    },
  ]);
  const [experience, setExpierence] = useState(formData);

  // data from edit-side needs to be passed into the resume
  return (
    <>
      <div id="main-app">
        <div id="user-container">
          <PersonalInfo />
          <Education />
          <Expierence
            formData={formData}
            setExpierence={setExpierence}
            expierence={experience}
            setFormData={setFormData}
          />
        </div>{" "}
      </div>
      <div id="edit-side">
        <div id="resume-container">
          <Resume experience={experience} />
        </div>
      </div>
    </>
  );
}

export default App;
