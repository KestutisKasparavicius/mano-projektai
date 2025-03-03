import React, { useEffect, useState } from 'react';
import PropTypes, { object } from 'prop-types';
import { Outlet, useParams } from 'react-router';

const ReadingRoom = ({ children }) => {
	const { bookID } = useParams();
	const [isLoading, setLoading] = useState(false);
	const [err, setErr] = useState(false);
	const [book, setBook] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await fetch(
					`http://localhost:3001/api/book/${bookID}`
				);
				const [resData] = await response.json();
				setBook(resData);
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
		<>
			<Outlet context={[book]} />
		</>
	);
};

ReadingRoom.propTypes = { Object };

export default ReadingRoom;
