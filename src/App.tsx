import {useState, ChangeEvent} from "react";
import PersonalInfo from "./components/personal-info/PersonalInfo";
import Education from "./components/personal-info/Education.tsx";
import Resume from "./components/resume/Resume.tsx";
import Expierence from "./components/personal-info/Expierence.tsx";
import FormData from "./FormData.tsx";
function App() {
  const [formData, setFormData] = useState(FormData);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    section: string,
    index: number
  ): void => {
    setFormData((prevFormData: any) => {
      const updatedSections = {...prevFormData.sections};
      updatedSections[section] = updatedSections[section].map(
        (item: any, i: number) =>
          i === index ? {...item, [e.target.name]: e.target.value} : item
      );
      return {...prevFormData, sections: updatedSections};
    });
  };

  return (
    <>
      <div id="main-app">
        <div id="user-container">
          <PersonalInfo
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />
          <Education
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />
          <Expierence
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />
        </div>
      </div>
      <div id="edit-side">
        <div id="resume-container">
          <Resume formData={formData.sections} />
        </div>
      </div>
    </>
  );
}

export default App;
