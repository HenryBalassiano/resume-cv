import {useState} from "react";
import "../../styles/PersonalInfo.css";

function PersonalInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });

  const handleChange = (e: any) => {
    setFormData(e.target.value);
  };

  return (
    <div className="personal-info">
      <div>
        <div>
          <form>
            <h2>Personal Details</h2>
            <label>
              Full Name:
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email Address:
              <input
                type="text"
                id="name"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Phone Number:
              <input
                type="text"
                id="name"
                value={formData.number}
                onChange={handleChange}
              />
            </label>
            <label>
              Address:
              <input
                type="text"
                id="name"
                value={formData.address}
                onChange={handleChange}
              />
            </label>
          </form>
        </div>{" "}
      </div>
    </div>
  );
}

export default PersonalInfo;
