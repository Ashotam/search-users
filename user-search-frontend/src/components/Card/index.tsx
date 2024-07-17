
import React from 'react';
import { User } from '../../types/UserContracts';
import './card.css';  
interface CardProps {
  user: User;
}

const Card: React.FC<CardProps> = ({ user }) => {
  return (
    <div className="card">
      <p>Email: {user.email}</p>
      <p>Number: {user.number}</p>
    </div>
  );
};

export default Card;