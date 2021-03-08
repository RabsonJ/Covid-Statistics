import { Pie } from 'react-chartjs-2';

const Chart = ({ casesData }) => {
   const { recovered, deaths, active, cases, country } = casesData;
	return (
		<div className="row">
			<Pie
				data={{
					labels: ['Active Cases', 'Deaths', 'Recovered', 'Total Cases'],
					datasets: [
						{
							label: 'Covid-19 Statistics',
							data: [active, deaths, recovered, cases],
							backgroundColor: [
								'rgba(45, 206, 227, .5)',
								'rgba(255, 10, 10, .5)',
								'rgba(22, 211, 54, .5)',
								'rgba(255, 168, 125, .5)',
							],
							borderColor: [
								'rgba(45, 206, 227, 1)',
								'rgba(255, 10, 10, 1)',
								'rgba(22, 211, 54, 1)',
								'rgba(255, 168, 125, 1)',
							],
							borderWidth: 2,
						},
					],
				}}
				height={400}
				width={600}
				options={{
					title: {
						display: true,
						text: `Covid-19 Stats for ${country}`,
						fontSize: '15',
					},
					legend: {
						display: true,
						position: 'right',
					},
					maintainAspectRatio: false,
					scales: {
						yAxes: [
							{
								ticks: {
									beginAtZero: true,
								},
							},
						],
					},
				}}
			/>
		</div>
	);
};

export default Chart;
