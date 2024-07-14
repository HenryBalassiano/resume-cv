import {useState, ChangeEvent} from "react";
import "../../styles/Expierence.css";

function Expierence({setExpierence, expierence, formData, setFormData}: any) {
  const [onSubmit, setOnSubmit] = useState<boolean>(false);
  const [onDropDown, setonDropDown] = useState<boolean>(false);
  const [formView, setFormView] = useState<boolean>(false);

  const [currentEditIndex, setCurrentEditIndex] = useState<number | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ): void => {
    setExpierence((prev: any[]) =>
      prev.map((o: any, i: number) =>
        i === index ? {...o, [e.target.name]: e.target.value} : o
      )
    );
  };
  console.log(expierence, "hi im value");

  const handleCancel = () => {
    setOnSubmit(false);
    setExpierence(formData);
    setFormView(!formView);
  };

  const handleSave = () => {
    setFormData(expierence);
    setOnSubmit(false);
    setCurrentEditIndex(null);
    setFormView(!formView);
  };

  const addTask = () => {
    const newField = {company: "", position: ""};
    setExpierence([...expierence, newField]);
    setOnSubmit(true);
    setCurrentEditIndex(expierence.length);
  };

  return (
    <div className="expierence">
      <button
        onClick={(e) => {
          e.preventDefault();
          setOnSubmit(!onSubmit);
          setonDropDown(!onDropDown);
        }}
      >
        <h2>Experience</h2>
      </button>
      {onDropDown ? (
        <div>
          {expierence.map((form: any, index: number) => (
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
                  {form.company}
                </button>
              ) : (
                ""
              )}
              {onSubmit && currentEditIndex === index && (
                <div id="expierence-form">
                  <form>
                    <div>
                      <label>Company</label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        onChange={(e) => handleChange(e, index)}
                        value={form.company}
                      />
                      <label>Position</label>
                      <input
                        type="text"
                        name="position"
                        id="position"
                        onChange={(e) => handleChange(e, index)}
                        value={form.position}
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

export default Expierence;
