import axios from 'axios';
import React, { Component } from 'react';
import CardsContainer from './components/CardsContainer';
import StatsCard from './components/StatsCard';

class App extends Component {
   state = {cases: {}}
	componentDidMount = async () => {
		try {
			const {data} = await axios.get(
				'https://corona.lmao.ninja/v3/covid-19/countries/zambia'
			);

         console.log(data);
         this.setState({cases: data})
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		return (
			<CardsContainer
				title="Covid-19 Statistics"
				subTitle="corona virus statistics"
				country={this.state.cases.country}
				continent={this.state.cases.continent}
			>
				<StatsCard
					className="success"
					stat={this.state.cases.active}
					title="Active Cases"
					icon="user"
				/>
				<StatsCard
					className="success"
					stat={this.state.cases.todayCases}
					title="Cases Today"
					icon="user"
				/>
				<StatsCard
					className="success"
					stat={this.state.cases.cases}
					title="Total Cases"
					icon="user"
				/>
				<StatsCard
					className="success"
					stat={this.state.cases.critical}
					title="Critical Cases"
					icon="user"
				/>
				<StatsCard
					className="danger"
					stat={this.state.cases.deaths}
					title="Total Deaths"
					icon="user"
				/>
				<StatsCard
					className="success"
					stat={this.state.cases.todayDeaths}
					title="Deaths Today"
					icon="user"
				/>
				<StatsCard
					className="success"
					stat={this.state.cases.recovered}
					title="Total Recoveries"
					icon="user"
				/>
				<StatsCard
					className="success"
					stat={this.state.cases.todayRecovered}
					title="Recovered Today"
					icon="user"
				/>
			</CardsContainer>
		);
	}
}

export default App;
