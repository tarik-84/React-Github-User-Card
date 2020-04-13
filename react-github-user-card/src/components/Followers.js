import React from 'react';


class Followers extends React.Component {
  constructor() {
    super();
    this.state= {
      followers: []
    }
  }  


  componentDidMount(){ 
    console.log('component')
    fetch(`https://api.github.com/users/tarik-84/followers`)
    .then(res =>res.json())
    .then(follow => {
        console.log('followers', follow)
        this.setState({
            followers: follow
        })
        
        
    })
    .catch(err => {
        console.log('err', err)
    })
 }

render() {
  return(
    <div>
     {this.state.followers.map(follower => (  
     <div className='card' key={follower.id}>
       <img className='img' src={follower.avatar_url} alt='user avatar' />
            <h4>{follower.login}</h4>
            <p>{follower.repos_url}</p>  
     </div>
      ))} 
    </div>  
  )
}

}


export default Followers;