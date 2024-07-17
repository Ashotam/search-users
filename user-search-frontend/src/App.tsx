import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm'; 
import Card from './components/Card';
import { User } from './types/UserContracts';
import './App.css';
const baseUrl = import.meta.env.VITE_BASE_URL as string;

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const cancelTokenSourceRef = useRef<ReturnType<typeof axios.CancelToken.source> | null>(null);
  const requestCounterRef = useRef(0);

  useEffect(() => {
    return () => {
      cancelRequest();
    };
  }, []);

  const cancelRequest = () => {
    if (cancelTokenSourceRef.current) {
      cancelTokenSourceRef.current.cancel('Component unmounted.');
      cancelTokenSourceRef.current = null;
    }
  };

  const handleUserFormSubmitSuccess = async (formData: User) => {
    cancelRequest();

    const source = axios.CancelToken.source();
    cancelTokenSourceRef.current = source;
    setLoading(true);
    setError(null);
    requestCounterRef.current += 1;
    const currentRequest = requestCounterRef.current;

    try {
      const response = await axios.post<User[]>(`${baseUrl}/api/search`, formData, {
        cancelToken: source.token,
      });
      if (currentRequest === requestCounterRef.current) {
        setUsers(response.data);
        setError(null); 
      }
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error('Search request failed:', error);
        if (currentRequest === requestCounterRef.current) {
          setError('Failed to search users. Please try again.');
        }
      }
    } finally {
     
      if (currentRequest === requestCounterRef.current) {
        setLoading(false);
      }
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