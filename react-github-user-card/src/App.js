import React from 'react';
import './App.css';
import UserCard from './components/UserCard';
import Followers from './components/Followers'

class App extends React.Component {
  constructor (){
    super();
    this.state = {
      name: [],
      avatar: [],
      location:[],
      followers: []
    }  
  }

  componentDidMount(){
    console.log('component')
    fetch(`https://api.github.com/users/tarik-84`)
    .then(res =>res.json())
    .then(data => {
      console.log('data', data)
      this.setState({name: data.name});
      this.setState({avatar: data.avatar_url});
      this.setState({location: data.location});
      this.setState({followers: data.followers})
    })
    .catch(err => {
      console.log('err', err)
    })
  }

  render(){
  
  return (
    <div className="App">
      <UserCard 
      name={this.state.name}
      avatar={this.state.avatar}
      location={this.state.location}
      followers={this.state.followers}
      />
      <h2>My Followers</h2>
      <Followers />
    </div>
  );
  }
}

export default App;
