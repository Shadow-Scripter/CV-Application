import React, { useState } from 'react';
import './styles/PracticalExperience.css'
const PracticalExperience = () => {
  const [experience, setExperience] = useState({ company: '', position: '', responsibilities: '', from: '', until: '' });
  const [edit, setEdit] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prevExperience) => ({ ...prevExperience, [name]: value }));
  };

  const handleEdit = () => setEdit(true);
  const handleSubmit = () => setEdit(false);

  return (
    <div className="practical-experience">
      {edit ? (
        <>
          <input className='input' type="text" name="company" value={experience.company} onChange={handleChange} placeholder="Company Name" />
          <input className='input' type="text" name="position" value={experience.position} onChange={handleChange} placeholder="Position Title" />
          <textarea className='input' name="responsibilities" value={experience.responsibilities} onChange={handleChange} placeholder="Main Responsibilities"></textarea>
          <input className='input' type="date" name="from" value={experience.from} onChange={handleChange} />
          <input className='input' type="date" name="until" value={experience.until} onChange={handleChange} />
          <button className='submit' onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <p className='name'>Company: {experience.company}</p>
          <p className='name'>Position: {experience.position}</p>
          <p className='name'>Responsibilities: {experience.responsibilities}</p>
          <p className='name'>From: {experience.from}</p>
          <p className='name'>Until: {experience.until}</p>
          <button className='edit-button' onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default PracticalExperience;