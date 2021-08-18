import React, { Component } from 'react';
import axios from"axios"
import { LinkedIn } from 'react-linkedin-login-oauth2';
import linkedin from 'react-linkedin-login-oauth2/assets/linkedin.png'

class LinkedInPage extends Component {
  handleSuccess = (res) => {
      const data={
        code:res.code
      }
      axios.post('http://localhost:3030/api/v1/linkedinlogin', data
      ).then(response=>{
        console.log(response)
      })
  }

  handleFailure = (error) => {
      console.log ("error",error)
  }
  
  render() {
    return (
      <div>
        <LinkedIn
          clientId="785w8aw6yna19s"
          onFailure={this.handleFailure}
          onSuccess={this.handleSuccess}
          redirectUri="http://localhost:3000/linkedin"
        >
          <img src={linkedin} alt="Log in with Linked In" style={{ maxWidth: '180px' }} />
        </LinkedIn>
      </div>
    );
  }
}

export default LinkedInPage;