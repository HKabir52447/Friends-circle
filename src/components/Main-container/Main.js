import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import Addfriend from '../Friendslist/Addfriend';
import './Main.css';

const Main = () => {
    const [friend, setFriend] = useState([]);
    const [friendName, setFriendName] = useState([]);
    useEffect(()=>{
        fetch('./friends.JSON')
        .then(res => res.json())
        .then(data => setFriend(data))
    },[]);
    const addFriendList = (friend) =>{
        setFriendName([...friendName, friend]);
    }
    return (
        <div className='main-container'>
            <div className='friends'>
                {
                    friend.map(friend => <Friend key={friend.id} friend={friend} addFriendList={addFriendList}></Friend> )
                }
            </div>
            <div className='friends-list'>
                <Addfriend friendName={friendName}></Addfriend>
            </div>
        </div>
    );
};

export default Main;