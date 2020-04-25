import React from 'react' ;

function About () {
  const username = {'hassan'}
  const password = {"123456"}
  function msg() {
    if username === "" && password === "" : 
  }

    return (
      <React.Fragment>
        <div style={log}>
        <h1 style={{ backgroundColor:'blue', color:'white'}}>Login</h1>
        <input type="text" placeholder="Username" style={{ marginTop : '4px'}} />
        <input type="text" placeholder="Password" style={{marginTop : '4px'}} />
        <button type="submit">submit</button>
        </div>
      </React.Fragment>
    )
}

const log = {

}


export default About;