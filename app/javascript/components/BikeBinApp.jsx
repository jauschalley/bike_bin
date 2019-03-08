import React from 'react';
import BikeBinHome from './BikeBinHome'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


// export default class BikeBinApp extends React.Component {
//   render() {
//     return (
//       <BikeBinHome />
//     );
//   }
// }

const BikeBinApp = () => {
  return (
    <Router>
      <Route path="/" component={BikeBinHome}>
      </Route>
    </Router>
  );
};

export default BikeBinApp 