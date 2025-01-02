import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

import Error from '../components/Error.jsx';
import BookAboutCSS from '../styles/bookAbout.module.css';
import Image from '../components/Image.jsx';
import Images from '../assets/Images.js';

const BookAbout = () => {
	const { bookID } = useParams();
	const [isLoading, setLoading] = useState(false);
	const [data, setData] = useState([]);
	const [err, setErr] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await fetch(
					`http://localhost:3001/api/book/${bookID}`
				);
				const [resData] = await response.json();
				console.log(resData);
				setData(resData);
			} catch (err) {
				setErr(err);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [bookID]);

	if (isLoading) {
		return <div className="loading">Loading..</div>;
	}

	if (err) {
		return <Error />;
	}

	return (
		<div className={BookAboutCSS.page}>
			<article className={BookAboutCSS.article}>
				<Image classElem={BookAboutCSS.image} image={Images.bookstack} />
				<div className={BookAboutCSS.wrapper}>
					<h1 className={BookAboutCSS.header}>{data.pavadinimas}</h1>
					<p className={BookAboutCSS.para}>Author: {data.autorius}</p>
					<p className={BookAboutCSS.para}>Pages: {data.puslapiai}</p>
					<p className={BookAboutCSS.para}>ISBN: {data.isbn}</p>
				</div>
				<div className={BookAboutCSS.descriptionWrapper}>
					<p
						className={[BookAboutCSS.para, BookAboutCSS.description].join(' ')}
					>
						{data.aprasimas}
					</p>
					<Link
						to={{
							pathname: `/reading-room/${data.kategorija}/${data.id}`,
						}}
						className={BookAboutCSS.link}
					>
						Preview...
					</Link>
				</div>
			</article>
		</div>
	);
};

export default BookAbout;
