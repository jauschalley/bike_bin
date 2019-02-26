import React from 'react';

export default class Search extends React.Component {
  render() {
    return (
      <div className="ui raised segment no padding">
        <form method="GET" action="search">
          <h1>Hello.  I'm your baby React component.  Do you want to play a game with me?</h1>
        </form>
      </div>
    );
  }
}