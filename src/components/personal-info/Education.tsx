import {useState} from "react";
import "../../styles/Education.css";

function Education() {
  const [onSubmit, setOnSubmit] = useState(false);
  const [onDropDown, setDrepDown] = useState(false);

  return (
    <div className="education">
      <button
        onClick={(e) => {
          setDrepDown(!onDropDown);
          e.preventDefault();
        }}
      >
        <h2>Education</h2>{" "}
      </button>

      {!onDropDown ? (
        ""
      ) : (
        <div>
          {onSubmit ? (
            <div>
              <form id="education-form">
                <div>
                  <label></label>
                  <input></input>
                  <label></label>
                  <input></input>
                </div>
                <button
                  onClick={(e) => {
                    setOnSubmit(!onSubmit);
                    e.preventDefault();
                  }}
                >
                  <p>Cancel</p>
                </button>
              </form>
            </div>
          ) : (
            <form>
              <button
                onClick={(e) => {
                  setOnSubmit(!onSubmit);
                  e.preventDefault();
                }}
              >
                <p>New York universey</p>{" "}
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default Education;
