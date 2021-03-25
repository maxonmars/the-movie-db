import React, {Component} from 'react';

const API_URL = ''
const API_KEY_3 = ''

class MoviesList extends Component {
	constructor() {
		super();

		this.state = {
			movies: []
		}
	}

	componentDidMount() {
		const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru-RU`;
		fetch(link)
			.then(response => {
				return response.json()
			})
			.then(data => {
				this.setState({
					movies: data.results
				})
			})
	}

	render() {
		const {movies} = this.state
		return (
			<div className="row">
				{movies.map(movie => {
					return (
						<div key={movie.id} className="col-6 mb-4">
							MovieItem
						</div>
					)
				})}

			</div>
		);
	}
}

export default MoviesList;