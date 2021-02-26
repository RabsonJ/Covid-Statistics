import StatsCard from './StatsCard';

const StatsCards = ({cases}) => {
   return (
			<div className="row">
				<StatsCard
					className="info"
					stat={cases.active}
					title="Active Cases"
					icon="fa-disease"
				/>
				<StatsCard
					className="info"
					stat={cases.todayCases}
					title="Cases Today"
					icon="fa-user-plus"
				/>
				<StatsCard
					className="warning"
					stat={cases.cases}
					title="Total Cases"
					icon="fa-search-plus"
				/>
				<StatsCard
					className="warning"
					stat={cases.critical}
					title="Critical Cases"
					icon="fa-wave-square"
				/>
				<StatsCard
					className="danger"
					stat={cases.deaths}
					title="Total Deaths"
					icon="fa-heartbeat"
				/>
				<StatsCard
					className="danger"
					stat={cases.todayDeaths}
					title="Deaths Today"
					icon="fa-heartbeat"
				/>
				<StatsCard
					className="success"
					stat={cases.recovered}
					title="Total Recoveries"
					icon="fa-chart-area"
				/>
				<StatsCard
					className="success"
					stat={cases.todayRecovered}
					title="Recovered Today"
					icon="fa-chart-line"
				/>
			</div>
		);
}

export default StatsCards;
