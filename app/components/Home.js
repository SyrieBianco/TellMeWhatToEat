import React from 'react';
import { connect } from 'react-redux';
import Messages from './Messages';
// import Map from './Landing_page/Map';
// import AutoSearch from './Landing_page/auto_complete_container';
import LandingPage from './Landing_page/landing_page';
// import FindRestaurants from './find_restaurants';

class Home extends React.Component {
  render() {
    return (
      <div className="landing-page-container">
        <div>Tell Me What To Eat</div>
        <div>More eating, less deciding</div>
        <LandingPage/>
      </div>
    );
  }
}

export default connect(null)(Home);


//
// <div className="row">
//   <div className="col-sm-4">
//     <div className="panel">
//       <div className="panel-body">
//         <h3>Heading</h3>
//         <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
//           mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
//           mollis euismod. Donec sed odio dui.</p>
//         <a href="#" role="button" className="btn btn-default">View details</a>
//       </div>
//     </div>
//   </div>
//   <div className="col-sm-4">
//     <div className="panel">
//       <div className="panel-body">
//         <h3>Heading</h3>
//         <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
//           mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
//           mollis euismod. Donec sed odio dui.</p>
//         <a href="#" role="button" className="btn btn-default">View details</a>
//       </div>
//     </div>
//   </div>
//   <div className="col-sm-4">
//     <div className="panel">
//       <div className="panel-body">
//         <h3>Heading</h3>
//         <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor
//           mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna
//           mollis euismod. Donec sed odio dui.</p>
//         <a href="#" role="button" className="btn btn-default">View details</a>
//       </div>
//     </div>
//   </div>
// </div>
