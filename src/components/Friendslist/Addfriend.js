import React from 'react';

const Addfriend = (props) => {
    const {friendName} = props;
    let total =0;
    let name = '';
    for(let friend of friendName){
        total = total + friend.salary;
        name = friend.name;
             
    }
    return (
           <div className='add-friends'>
                <h2> <i class="fas fa-user"></i> Friends added:<span className='friends-number'>{props.friendName.length} </span> </h2>
                <h3> Total Cost: $ <span className='total-cost'>{total} </span> </h3>
                <div>
                <h3>Added friend's list:</h3>
                <h4>{name} </h4>
                </div>
            </div>
    );
};

export default Addfriend;