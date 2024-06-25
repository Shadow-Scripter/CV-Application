import React, { useState } from 'react';
import './styles/GeneralInfo.css';

const GeneralInfo = () => {
  const [info, setInfo] = useState({ name: '', email: '', phone: '' });
  const [edit, setEdit] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleEdit = () => setEdit(true);
  const handleSubmit = () => setEdit(false);

  return (
    <div className="general-info">
      {edit ? (
        <>
          <input className='input' type="text" name="name" value={info.name} onChange={handleChange} placeholder="Name" />
          <input className='input' type="email" name="email" value={info.email} onChange={handleChange} placeholder="Email" />
          <input className='input' type="tel" name="phone" value={info.phone} onChange={handleChange} placeholder="Phone" />
          <button className='submit' onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <p className='name'>Name: {info.name}</p>
          <p className='email'>Email: {info.email}</p>
          <p className='phone'>Phone: {info.phone}</p>
          <button className='edit-button' onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default GeneralInfo;