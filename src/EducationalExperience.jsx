import React, { useState } from 'react';
import './styles/EducationalExperience.css'
const EducationalExperience = () => {
  const [education, setEducation] = useState({ school: '', title: '', date: '' });
  const [edit, setEdit] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prevEducation) => ({ ...prevEducation, [name]: value }));
  };

  const handleEdit = () => setEdit(true);
  const handleSubmit = () => setEdit(false);

  return (
    <div className="educational-experience">
      {edit ? (
        <>
          <input className='input' type="text" name="school" value={education.school} onChange={handleChange} placeholder="School Name" />
          <input className='input' type="text" name="title" value={education.title} onChange={handleChange} placeholder="Title of Study" />
          <input className='input' type="date" name="date" value={education.date} onChange={handleChange} />
          <button className='submit' onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <p className='name'>School: {education.school}</p>
          <p className='name'>Title: {education.title}</p>
          <p className='name'>Date: {education.date}</p>
          <button className='edit-button' onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default EducationalExperience;