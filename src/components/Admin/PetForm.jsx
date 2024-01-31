import React, { useState } from 'react';
import axios from 'axios';
import baseUrl from '../../Api'

const PetForm = () => {
  const initialPetData = {
    PetName: '',
    Species: '',
    Petcode: '',
    Age: '',
    Gender: 'Male', // default to Male
    Breed: '',
    Color: '',
    Image: null,
    Description: '',
    // Add other fields here
    // FieldName: '',
    // AnotherFieldName: '',
    // ...
  };

  const [petData, setPetData] = useState(initialPetData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPetData((inputs) => ({ ...inputs, [name]: value }));
  };

//savedata code:
const SaveData = () => {
  console.log("Attempting to save data:", petData);
  axios.post( baseUrl+"/admin/tnew", petData)
    .then((response) => {
      alert("Record Saved");
    })
    .catch((err) => console.log(err));
};






  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPetData({ ...petData, Image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Use FormData to handle file uploads
    const formData = new FormData();
    formData.append('PetName', petData.PetName);
    formData.append('Species', petData.Species);
    formData.append('Petcode', petData.Petcode);
    formData.append('Age', petData.Age);
    formData.append('Gender', petData.Gender);
    formData.append('Breed', petData.Breed);
    formData.append('Color', petData.Color);
    formData.append('Image', petData.Image);
    formData.append('Description', petData.Description);
    // Add other fields here
    // formData.append('FieldName', petData.FieldName);
    // formData.append('AnotherFieldName', petData.AnotherFieldName);
    // ...

    try {
      // Replace 'YOUR_SERVER_ENDPOINT' with the actual endpoint where you handle form submissions
      await axios.post('YOUR_SERVER_ENDPOINT', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle successful submission, e.g., redirect or show a success message
      console.log('Pet added successfully!');
    } catch (error) {
      // Handle errors
      console.error('Error adding pet:', error);
    }

    // Reset form data after submission
    setPetData(initialPetData);
  };

  const handleReset = () => {
    // Reset form data
    setPetData(initialPetData);
  };

  return (
    <div>
      <h1>Add a New Pet</h1>
      <form onSubmit={handleSubmit}>
        <table style={{ width: '100%', marginBottom: '20px', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <label htmlFor="PetName">Pet Name:</label>
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <input type="text" name="PetName" value={petData.PetName} onChange={handleInputChange} required />
              </td>
            </tr>

            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <label htmlFor="Species">Species:</label>
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <input type="text" name="Species" value={petData.Species} onChange={handleInputChange} required />
              </td>
            </tr>

            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <label htmlFor="Petcode">Pet Code:</label>
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <input type="text" name="Petcode" value={petData.Petcode} onChange={handleInputChange} required />
              </td>
            </tr>

            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <label htmlFor="Age">Age:</label>
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <input type="text" name="Age" value={petData.Age} onChange={handleInputChange} required />
              </td>
            </tr>

            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <label htmlFor="Gender">Gender:</label>
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <select name="Gender" value={petData.Gender} onChange={handleInputChange} required>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </td>
            </tr>

            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <label htmlFor="Breed">Breed:</label>
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <input type="text" name="Breed" value={petData.Breed} onChange={handleInputChange} required />
              </td>
            </tr>

            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <label htmlFor="Color">Color:</label>
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <input type="text" name="Color" value={petData.Color} onChange={handleInputChange} required />
              </td>
            </tr>

            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <label htmlFor="Image">Image:</label>
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <input type="file" name="Image" accept="image/*" onChange={handleImageChange} required />
              </td>
            </tr>

            <tr>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <label htmlFor="Description">Description:</label>
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                <textarea
                  name="Description"
                  value={petData.Description}
                  onChange={handleInputChange}
                  rows="4"
                  cols="50"
                  required
                />
              </td>
            </tr>

            {/* Add other fields here */}
            
          </tbody>
        </table>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button type="submit" onClick={SaveData} style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>
            ADD 
          </button>

          <button type="button" onClick={handleReset} style={{ backgroundColor: '#f44336', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>
            RESET
          </button>
        </div>
      </form>
    </div>
  );
};

export default PetForm;
