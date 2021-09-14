import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    
    this.state = { users_data: [], loading: false };

    this.updateState = this.updateState.bind(this);
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navitems">
            <img className="logo" src="https://www.apple.com/ac/globalnav/6/en_IN/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_large.svg" width="2%" height="2%"/>
            <h2>A P P L E</h2>
            <button className="click" onClick={this.updateState}>
              Get Users
            </button>
          </div>
        </nav>
        <div className="userbox">
          <this.Users loading={this.state.loading} users={this.state.users_data} />
        </div>
        <footer className="footer">
          Thank you for visiting - made by Gaurav Antal
        </footer>
      </>
    );
  }

  Users = ({ loading, users }) => {
    const mainstyle = {
      display: "flex"
    };
    return loading ? (
      <div id="html" align="center">
        <img
          src="https://acegif.com/wp-content/uploads/loading-42.gif" width="6%" height="6%"
          alt="Loaading.."
          className="loader"
        />
      </div>
    ) : (
      <div id="html" style={mainstyle}>
        {users.map((user) => (
          <div className="profile_cont" key={user.id}>
            {console.log(user)}

            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
            <h1 className="name">
              {user.first_name} {user.last_name}
            </h1>
            <p className="email">{user.email}</p>
            <p>User ID: {user.id}</p>
          </div>
        ))}
      </div>
    );
  };

  updateState() {
    this.setState({ loading: true });

    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
      2000
    );
  }
  

  
}

export default App;
