import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    const url = 'https://api.nexaflow.xyz/api/form/66d3085dc4843fadfbfb37b5';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': '~IxP2nxD3iyH0',
        },
        body: JSON.stringify({
          Name: name,
          Age: age,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Success:', result);
  
      } else {
        console.error('Error:', response.statusText);
   
      }
    } catch (error) {
      console.error('Error:', err);

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
