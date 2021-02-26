import axios from 'axios';
import React, { Component } from 'react';
import Container from './components/Container';
import CountryInfo from './components/CountryInfo';
import SearchBar from './components/SearchBar';
import StatsCards from './components/StatsCards';

class App extends Component {
	state = { cases: {} };
	componentDidMount = async () => {
		try {
			const { data } = await axios.get(
				'https://corona.lmao.ninja/v3/covid-19/countries/morocco'
			);

			console.log(data);
			this.setState({ cases: data });
		} catch (err) {
			console.log(err);
		}
	};

	getByCountry = async (term) => {
		try {
			const { data } = await axios.get(
				`https://corona.lmao.ninja/v3/covid-19/countries/${term}`
			);

			console.log(data);
			this.setState({ cases: data });
		} catch (err) {
			console.log(err);
		}
	}

	onFormSubmit = (term) => {
		this.getByCountry(term);
	}

	render() {
		return (
			<Container
				title="Covid-19 Statistics"
				subTitle="corona virus statistics"
				country={this.state.cases.country}
				continent={this.state.cases.continent}
			>
				<SearchBar onFormSubmit={this.onFormSubmit} />
				<CountryInfo cases={this.state.cases}/>
				<StatsCards cases={this.state.cases}/>
			</Container>
		);
	}
}

export default App;
