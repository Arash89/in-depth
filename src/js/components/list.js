/* jshint esnext:true */
import React, {Component} from 'react';

class List extends Component {

	renderProfiles () {
		console.log("Props: ", this.props);
	    return this.props.profile.map( (profile) => {
	      return (
	        <li className="list-depth">
	          <img src={ profile.imagePath } className="profile-image" align="left" width="30" height="30" />
	          <div className="profile-description">
	            { profile.text }
	          </div>
	        </li>
	      );
	    });
	  }

	  render() {
	    return (<ul className="profile-list">{ this.renderProfiles() }</ul>);
	  }

}

List.defaultProps = {
	profile: [{imagePath: "", text: "This is the default text"}],
};

export default List;

