import axios from 'axios';
import React, { Component } from 'react';
import Chart from './components/Chart';
import Container from './components/Container';
import CountryInfo from './components/CountryInfo';
import SearchBar from './components/SearchBar';
import StatsCards from './components/StatsCards';
import Loader from './components/Loader';

class App extends Component {
	state = { cases: {}, country: '', isLoading: true };
	componentDidMount = async () => {
		try {
			const { data } = await axios.get(
				`https://api.ipdata.co?api-key=${process.env.REACT_APP_IP_DATA_KEY}`
			);
			this.setState({ country: data.country_name });
			this.getByCountry(this.state.country);
		} catch (err) {
			console.log(err);
		}
	};

	getByCountry = async (term) => {
		try {
			const { data } = await axios.get(
				`https://corona.lmao.ninja/v3/covid-19/countries/${term}`
			);
			this.setState({ cases: data, isLoading: false });
		} catch (err) {
			console.log(err);
		}
	};

	onFormSubmit = (term) => {
		this.getByCountry(term);
	};

	renderedContent() {
		if (this.state.isLoading) {
			return <Loader text="Getting statistics..." />;
		}

		return (
			<Container
				title="Covid-19 Statistics"
				subTitle="corona virus statistics"
				country={this.state.cases.country}
				continent={this.state.cases.continent}
			>
				<SearchBar onFormSubmit={this.onFormSubmit} />
				<CountryInfo cases={this.state.cases} />
				<StatsCards cases={this.state.cases} />
				<div className="row">
					<Chart casesData={this.state.cases} />
				</div>
			</Container>
		);
	}

	render() {
		return <div>{this.renderedContent()}</div>;
	}
}

export default App;
