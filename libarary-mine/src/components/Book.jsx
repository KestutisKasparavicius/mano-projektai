import React from 'react';
import { useOutletContext, Link } from 'react-router';
import Images from '../assets/Images';
import Image from '../components/Image';
import BookCSS from '../styles/book.module.css';
const Book = () => {
	const [book] = useOutletContext();
	let content = book?.knygos_perziura
		? book.knygos_perziura.split('<!-- PAGE -->')
		: [];
	return (
		<div className={BookCSS.page}>
			<main className={BookCSS.bookContainer}>
				<section className={BookCSS.bookPage}>
					<article className={BookCSS.content}>
						<pre className={BookCSS.text}>{content[0]}</pre>
					</article>
				</section>
				<section className={BookCSS.bookPage}>
					<article className={BookCSS.content}>
						<pre className={BookCSS.text}>{content[1]}</pre>
					</article>
				</section>
				<nav className={BookCSS.navBar}>
					<Link to={'/'}>
						Back
						<Image image={Images.back} classElem={BookCSS.icon} />
					</Link>
				</nav>
			</main>
		</div>
	);
};

export default Book;
