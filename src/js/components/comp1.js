/* jshint esnext:true */
import React, {Component} from 'react';

class Comp1 extends Component {

	constructor(props) {
		super(props);
		this.state = {compOneVar: "Something 1"}
	}

	render() {
		return (<div>
				  This is Comp1 var: {this.state.compOneVar}	
				  <input/>
				</div>);
	}

}

export default Comp1;

