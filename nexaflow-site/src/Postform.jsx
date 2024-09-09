import { useState } from 'react';

const PostForm = () => {

  const [name, setName] = useState('');
  const [mailId, setMailId] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault();


    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'x-api-key': '~IxP2nxD3iyH0'
      },
      body: JSON.stringify({ name, 'mail-id': mailId, 'mobile-no': mobileNo })
    };

    try {
      const response = await fetch('https://api.nexaflow.xyz/api/form/66d59e39c4843fadfbfb41f6', options);
      const result = await response.json();


      if (response.ok) {
        setSuccess('Form submitted successfully!');
        setError(null);
      } else {
        setError(result.message || 'Failed to submit form');
        setSuccess(null);
      }
    } catch (error) {
      setError('An error occurred while submitting the form');
      setSuccess(null);
    }
  };

  return (
    <div>
      <h4>Submit Your Details</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mail ID:</label>
          <input
            type="email"
            value={mailId}
            onChange={(e) => setMailId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mobile No:</label>
          <input
            type="text"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default PostForm;
