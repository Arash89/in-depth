/* jshint esnext:true */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Comp1 from './components/comp1';
import Comp2 from './components/comp2';
import Comp3 from './components/comp3';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			persons:[],
		};
	}

	render() {
		return (<div>
					<h1>Salam 2</h1>
					<Comp1 />
				</div>);
	}

}

ReactDOM.render(<App />, document.getElementById('container'));