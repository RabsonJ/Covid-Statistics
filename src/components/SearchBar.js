import React, { Component } from 'react'

class SearchBar extends Component {
	state = { term: '' };

	onInputChange = (e) => {
		this.setState({ term: e.target.value });
	};

	onFormSubmit = (e) => {
		e.preventDefault();
      this.props.onFormSubmit(this.state.term);
      this.setState({term: ''})
	};

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="mb-2" style={{maxWidth: '500px'}}>
				<div className="form-group">
					<label htmlFor="country">Country Search</label>
					<input
						type="text"
						placeholder="Enter a country"
						className="form-control"
						id="country"
						value={this.state.term}
						onChange={this.onInputChange}
					/>
					<small className="form-text text-muted grey">
						Press Enter/Return to search
					</small>
				</div>
			</form>
		);
	}
}

export default SearchBar;
