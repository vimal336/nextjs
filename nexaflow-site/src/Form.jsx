import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState(''); 
  const [messageType, setMessageType] = useState('');

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
        setMessage('Form submitted successfully!');
        setMessageType('success');
      } else {
        console.error('Error:', response.statusText);
        setMessage('Error submitting form. Please try again.');
        setMessageType('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error submitting form. Please try again.');
      setMessageType('error');
    }
  };

  return (
    <div>
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

      {message && (
        <div style={{ color: messageType === 'success' ? 'green' : 'red' }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Form;
