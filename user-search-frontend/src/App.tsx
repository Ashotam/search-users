import React, { useState } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm'; // Adjust the path as needed
import Card from './components/Card'; // Adjust the path as needed
import { User } from './types/UserContracts';
import './App.css'; // Assuming your CSS file is named App.css
const baseUrl = import.meta.env.VITE_BASE_URL as string;

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cancelTokenSource, setCancelTokenSource] = useState<ReturnType<typeof axios.CancelToken.source>>();

  const handleUserFormSubmitSuccess = async (formData: User) => {
    if (cancelTokenSource) {
      cancelTokenSource.cancel('Operation canceled due to new request.');
    }

    const source = axios.CancelToken.source();
    setCancelTokenSource(source);
    setLoading(true); 

    try {
      const response = await axios.post<User[]>(`${baseUrl}/api/search`, formData, {
        cancelToken: source.token,
      });
      setUsers(response.data);
      setLoading(false)
      setError(null);
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error('Search request failed:', error);
      }
      setError('Failed to search users. Please try again.');
    } 
  };

  const resetForm = () => {
    setUsers([]);
  };

  return (
    <div className="app-container">
      <UserForm onSubmitSuccess={handleUserFormSubmitSuccess} resetForm={resetForm} />
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      <div className="card-list">
        {users.map((user: User) => (
          <Card key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;