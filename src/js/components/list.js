/* jshint esnext:true */
import React, {Component} from 'react';
import Profile from './Profile';

class List extends Component {

	  render() {
	    return (
	    	<ul className="profile-list">
	    		{ this.props.profile.map( (profile) => <Profile {...profile} /> ) }
	    	</ul>
	    );
	  }

}

List.defaultProps = {
	profile: [{imagePath: "", text: "This is the default text"}],
};

export default List;

