import React from 'react'
import Room from './Room'

const RoomList = ({ rooms }) => {
    return (
        <>
            <div>RoomList</div>
            {rooms && rooms.map((room) => (<Room key={room._id} name={room.name} />))}
        </>
    )
}

export default RoomList