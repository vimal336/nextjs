import { useState } from 'react';

const Postform = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handlePostRequest = (event) => {
    event.preventDefault(); // Prevent form submission from reloading the page

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'x-api-key': '~IxP2nxD3iyH0'
      },
      body: JSON.stringify({ name, age })
    };

    fetch('https://api.nexaflow.xyz/api/form/66d3085dc4843fadfbfb37b5', options)
      .then(response => response.json())
      .then(data => setResponse(data))
      .catch(err => setError(err));
  };

  return (
    <div>
      <form onSubmit={handlePostRequest}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <button type="submit" style={{ backgroundColor: 'green' }}>Submit Form</button>
      </form>
      {response && <pre>Response: {JSON.stringify(response, null, 2)}</pre>}
      {error && <pre>Error: {error.message}</pre>}
    </div>
  );
};

export default Postform;
