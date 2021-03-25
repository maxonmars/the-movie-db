import React, {Component} from 'react';

class Filters extends Component {
	render() {
		return (
			<form className="mb-3">
				<div className="form-group">
					<label className="sort_by">сортировать по:</label>
					<select className="sort-control" id="sort_by">
						<option value="popularity.desc">Популярные по убыванию</option>
						<option value="popularity.asc">Популярные по возрастанию</option>
						<option value="vote_average.desc">Рейтинг по убыванию</option>
						<option value="vote_average.asc">Рейтинг по возрастанию</option>
					</select>
				</div>
			</form>
		);
	}
}

export default Filters;