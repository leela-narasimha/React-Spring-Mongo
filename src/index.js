//Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';

//Create React components
//const App = () => {
//  return <div> hi There </div>
//}
//take react component and show it on browser
ReactDOM.render(
  <React.StrictMode>
    <LoginForm />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

