import "../../styles/Resume.css";

function Resume({formData}: any) {
  return (
    <div className="resume">
      {formData.experience.map((index: any, v: number) => (
        <div key={v}>
          {index.company}
          {index.position}
        </div>
      ))}
      {formData.education.map((index: any, v: number) => (
        <div key={v}>
          {index.school}
          {index.degree}
        </div>
      ))}
    </div>
  );
}

export default Resume;
