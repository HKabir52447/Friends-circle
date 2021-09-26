import React from 'react';
import './Friend.css';

const Friend = (props) => {
    // console.log(props);
    const {name, age, salary, job, img, university} = props.friend;
    return (
        <div className='friend-container'>
            <div className='friend'>
                <img src={img} alt='friend-img' />
                <h3 className='name'>Name    : {name}</h3>
                <p>Graduate from    : {university} </p>
                <p>Job    : {job}</p>
                <p>Salary    : {salary} TK</p>
                <p>Age    : {age}</p>
                <button onClick={() => props.addFriendList(props.friend)} className='btn'><i class="fas fa-user"></i> Add to List</button>
                <p><i class="fab fa-facebook-square"></i> <i class="fab fa-linkedin"></i></p>
                
                
            </div>
        </div>
    );
};

export default Friend;