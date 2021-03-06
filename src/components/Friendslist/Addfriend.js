import React from 'react';



const Addfriend = (props) => {
    const {friendName} = props;
    let total =0;
    for(let friend of friendName){
        total = total + friend.salary;    
    }
    return (
           <div className='add-friends'>
                <h2> <i class="fas fa-user"></i> Friends added:<span className='friends-number'>{props.friendName.length} </span> </h2>
                <h3> Total Cost: TK <span className='total-cost'>{total} </span> </h3>
                <div>
                <h3>Added friend's list:</h3>
               {
                   friendName.map(friendList => <h4><li>{friendList.name}</li></h4>)
               }
                </div>
            </div>
    );
};

export default Addfriend;