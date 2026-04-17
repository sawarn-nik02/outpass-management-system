import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ name, age, email, bio }) => {
    return (
        <div className="user-card">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
            <p>Bio: {bio}</p>
        </div>
    );
};

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string,
};

export default UserCard;