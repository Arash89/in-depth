import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import {profiles} from './simulateData';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			persons:[],
		};
	}

	render() {
		const obj = {};
		obj.profile = profiles;
		const x = undefined;
		return (<div>
					<h1>Salam 2</h1>
					<List {...obj}/>
				</div>);
	}

}

ReactDOM.render(<App />, document.getElementById('container'));