import axios from 'axios';
import React, { Component } from 'react';
import Chart from './components/Chart';
import Container from './components/Container';
import CountryInfo from './components/CountryInfo';
import SearchBar from './components/SearchBar';
import StatsCards from './components/StatsCards';
import Loader from './components/Loader';

class App extends Component {
	state = { cases: {}, country: '', isLoading: true, error: '' };
	componentDidMount = async () => {
		try {
			const { data } = await axios.get(
				`https://api.ipdata.co?api-key=${process.env.REACT_APP_IP_DATA_KEY}`
			);
			this.setState({ country: data.country_name });
			this.getByCountry(this.state.country);
		} catch (err) {
			this.setState({
				error: 'Something went wrong. Please try again!',
				isLoading: false,
			});
		}
	};

	getByCountry = async (term) => {
		try {
			const { data } = await axios.get(
				`https://corona.lmao.ninja/v3/covid-19/countries/${term}`
			);
			this.setState({ cases: data, isLoading: false });
		} catch (err) {
			const { data, status } = err.response;
			if (status === 404) {
				this.setState({ error: data.message, isLoading: false });
			} else {
				this.setState({
					error: 'Something went wrong 😭',
					isLoading: false,
				});
			}
		}
	};

	onFormSubmit = (term) => {
		this.state.error && this.setState({ error: '' });
		this.getByCountry(term);
	};

	renderedContent() {
		if (this.state.isLoading) {
			return <Loader text="Getting statistics..." />;
		}

		if (this.state.error) {
			return (
				<Container
					title="Covid-19 Statistics"
					subTitle="corona virus statistics"
				>
					<SearchBar onFormSubmit={this.onFormSubmit} />
					<div
						className="alert alert-danger mx-auto text-center"
						role="alert"
						style={{ maxWidth: '600px' }}
					>
						{this.state.error}
					</div>
				</Container>
			);
		}

		return (
			<Container title="Covid-19 Statistics" subTitle="corona virus statistics">
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
