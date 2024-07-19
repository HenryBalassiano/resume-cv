import {useState, ChangeEvent} from "react";
import "../../styles/Expierence.css";
function Experience({formData, setFormData, handleChange}: any) {
  const [onSubmit, setOnSubmit] = useState<boolean>(false);
  const [onDropDown, setOnDropDown] = useState<boolean>(false);
  const [formView, setFormView] = useState<boolean>(false);
  const [currentEditIndex, setCurrentEditIndex] = useState<number | null>(null);

  const handleCancel = () => {
    setOnSubmit(false);
    setFormView(!formView);
  };

  const handleSave = () => {
    setOnSubmit(false);
    setCurrentEditIndex(null);
    setFormView(!formView);
  };
  console.log(formData.sections.education, "hi education");
  const addTask = () => {
    const newField = {school: "", degree: ""};
    const updatedExperience = [...formData.sections.education, newField];
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      sections: {
        ...prevFormData.sections,
        experience: updatedExperience,
      },
    }));
    setOnSubmit(true);
    setCurrentEditIndex(updatedExperience.length - 1);
  };

  return (
    <div className="expierence">
      <button
        onClick={(e) => {
          e.preventDefault();
          setOnSubmit(!onSubmit);
          setOnDropDown(!onDropDown);
        }}
      >
        <h2>Experience</h2>
      </button>
      {onDropDown ? (
        <div>
          {formData.sections.education.map((form: any, index: number) => (
            <div key={index}>
              {!formView ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setOnSubmit(true);
                    setCurrentEditIndex(index);
                    setFormView(!formView);
                  }}
                >
                  {form.school}
                </button>
              ) : (
                ""
              )}
              {onSubmit && currentEditIndex === index && (
                <div id="experience-form">
                  <form>
                    <div>
                      <label>Company</label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        onChange={(e) => handleChange(e, "education", index)}
                        value={form.school}
                      />
                      <label>Position</label>
                      <input
                        type="text"
                        name="position"
                        id="position"
                        onChange={(e) => handleChange(e, "education", index)}
                        value={form.degree}
                      />
                    </div>
                    <button type="button" onClick={handleCancel}>
                      Cancel
                    </button>
                    <button type="button" onClick={handleSave}>
                      Save
                    </button>
                  </form>
                </div>
              )}
            </div>
          ))}
          {!formView ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                addTask();
                setFormView(!formView);
              }}
            >
              Add Task
            </button>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Experience;
