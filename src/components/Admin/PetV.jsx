import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PetV = () => {
  const [petList, setPetList] = useState([]);

  useEffect(() => {
    // Fetch pet data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/admin/tfetch');
      setPetList(response.data);
    } catch (error) {
      console.error('Error fetching pet data:', error);
    }
  };

  const handleDelete = async (petId) => {
    try {
      await axios.delete(`http://localhost:3001/admin/tdelete/${petId}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting pet data:', error);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>View All Pets</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
        <thead style={{ backgroundColor: '#4CAF50', color: 'white' }}>
          <tr>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Pet Name</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Species</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Pet Code</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Age</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Gender</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Breed</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Color</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Description</th>
            <th style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'left' }}>Actions</th>
            {/* Add other fields here */}
          </tr>
        </thead>
        <tbody>
          {petList.map((pet) => (
            <tr key={pet._id}>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{pet.PetName}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{pet.Species}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{pet.Petcode}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{pet.Age}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{pet.Gender}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{pet.Breed}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{pet.Color}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>{pet.Description}</td>
              <td style={{ padding: '12px', border: '1px solid #ddd' }}>
                <button onClick={() => handleDelete(pet._id)}>Delete</button>
              </td>
              {/* Add other fields here */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PetV;
