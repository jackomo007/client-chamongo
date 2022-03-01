import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import RoomList from "./RoomList";

function Home() {
  const { user, setUser } = useContext(UserContext);
  const rooms = [
    {
      name: 'room1',
      _id: '123'
    },
    {
      name: 'room2',
      _id: '321'
    }
  ]

  const setAsJack = () => {
    const jack = {
      name: "Jack",
      email: "jack@mail.com",
      password: "123",
      id: "123",
    };
    setUser(jack);
  };

  const setAsAngel = () => {
    const angel = {
      name: "Angel",
      email: "angel@mail.com",
      password: "321",
      id: "321",
    };
    setUser(angel);
  };

  return (
    <div>
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Welcome {user?.name}</span>
              <div className="row">
                <form >
                  <div className="row">
                    <div className="input-field col s6">
                      <input
                        placeholder="Enter a room name"
                        id="room"
                        type="text"
                        className="validate"
                      />
                      <label for="room">Room</label>
                    </div>
                    <div className="input-field col s6">
                      <input id="last_name" type="text" className="validate" />
                      <label htmlFor="last_name">Last Name</label>
                    </div>
                  </div>
                  <button className="btn">Create Room</button>
                </form>
              </div>
            </div>
            <div className="card-action">
              <a href="#" onClick={setAsJack}>set as Jack</a>
              <a href="#" onClick={setAsAngel}>set as Angel</a>
            </div>
          </div>
          <div className="col s6 m5 offset-1">
            <RoomList rooms={rooms}/>
          </div>
        </div>
      </div>
      <Link to="/chat">
        <button>Go to chat</button>
      </Link>
    </div>
  );
}

export default Home;
