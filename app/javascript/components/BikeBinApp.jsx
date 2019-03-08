import React from 'react';

export default class BikeBinApp extends React.Component {
  // constructor(props, _railsContext) {
  //   super(props);
  // }
  render() {
    return (
      <BikeBinHome />
    );
  }
}

class BikeBinHome extends React.Component {
  render() {
    return (
      <h1>Welcome to the Bike Bin homepage.</h1>
    );
  }
}