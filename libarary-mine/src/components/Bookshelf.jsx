import React from 'react';
import { Link } from 'react-router';
import BookshelfCSS from '../styles/bookshelf.module.css';
const Bookshelf = ({ bookList, genre }) => {
	return (
		<div>
			<span className={BookshelfCSS.genre}>{genre}</span>
			<ul className={BookshelfCSS.bookshelf}>
				{bookList.map((item) => {
					return (
						<li className={BookshelfCSS.book} key={item.id}>
							<Link to={`about/${item.kategorija}/${item.id}`}>
								{item.pavadinimas}
								<span className={BookshelfCSS.tooltip} title="description">
									{item.pavadinimas}
									<br />
									{item.autorius}
									<br />
									{item.puslapiai} pages
									<br />
								</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
Bookshelf.propTypes = {
	bookList: Array,
	genre: String,
};
export default Bookshelf;
