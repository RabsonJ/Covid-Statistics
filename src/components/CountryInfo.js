const CountryInfo = ({ cases }) => {
	const { countryInfo, country, continent, updated } = cases;
	return (
		<div className="d-flex align-items-center flex-wrap mb-2">
			<p className="d-flex align-items-center mr-auto">
				<img
					src={countryInfo?.flag}
					alt={country}
					style={{ width: '2rem', height: '2rem', marginRight: '.5rem' }}
				/>
				{country}, {continent}
			</p>
			<p>
				<strong>Last Updated: </strong> {new Date(updated).toUTCString()}
			</p>
		</div>
	);
};

export default CountryInfo;
