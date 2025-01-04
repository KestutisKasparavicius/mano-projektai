import {
	CreateBook,
	deleteBook,
	editBook,
	GetBookById,
	GetBooks,
} from '../models/bookData.js';

//
// Cia kazkur validavima mandrods reikia padaryti

export default {
	index: async (req, res, next) => {
		try {
			const result = await GetBooks(req.db);
			result.map((item) => {
				const genre = item.kategorija.toLowerCase().replace(' ', '-');
				item.kategorija = genre;

				let words = item.knygos_perziura.trim().split(' ');
				const middle = Math.round(words.length / 2);

				const pageBreak = (indexItem) => {
					for (let i = indexItem - 30; i < indexItem + 30; i++) {
						if (words[i].includes('\n\n') == true) {
							words[i] = words[i].replace('\n\n', '<!-- PAGE -->');
							return words.join(' ');
						} else {
							continue;
						}
					}
				};
				const stringy = pageBreak(middle);

				item.knygos_perziura = stringy;
			});
			res.status(200).json(result);
		} catch {
			res.status(404).json({ message: 'Data not found' });
		}
	},

	show: async (req, res, next) => {
		try {
			const result = await GetBookById(req.db, req.params.id);
			result.map((item) => {
				const genre = item.kategorija.toLowerCase().replace(' ', '-');
				item.kategorija = genre;

				let words = item.knygos_perziura.trim().split(' ');
				const middle = Math.round(words.length / 2);

				const pageBreak = (indexItem) => {
					for (let i = indexItem - 30; i < indexItem + 30; i++) {
						if (words[i].includes('\n\n') == true) {
							const temp = words[i].replace('\n\n', '<!-- PAGE -->');
							words[i] = temp;
							return words.join(' ');
						} else {
							continue;
						}
					}
				};
				const stringy = pageBreak(middle);

				item.knygos_perziura = stringy;
			});
			res.status(200).json(result);
		} catch {
			res.status(404).json({ message: 'Data with matching ID not found' });
		}
	},

	store: async (req, res, next) => {
		try {
			//
			// Data iterpti arba per body arba per query? Per query durnai gaunasi puslapiai nes jie 1000+ ilgumo

			const data = {};
			const result = await CreateBook(req.db, data);

			if (result) {
				res.status(200).json({
					status: 'success',
					message: 'Succesfully inserted data',
					id: result,
				});
			} else {
				res.status(500).json({ message: 'Cant insert data' });
			}
		} catch {
			res.status(500).json({ message: 'Server error' });
		}
	},

	update: async (req, res, next) => {
		try {
			//
			// Data iterpti arba per body arba per query? Per query durnai gaunasi puslapiai nes jie 1000+ ilgumo

			const data = {};
			const result = await editBook(req.db, data);

			if (result) {
				res.status(200).json({
					status: 'success',
					message: 'Succesfully inserted data',
					id: 'placeholder',
				});
			} else {
				res.status(500).json({ message: 'Cant insert data' });
			}
		} catch {
			res.status(500).json({ message: 'Server error' });
		}
	},

	destroy: async (req, res, next) => {
		try {
			//
			// Tas pats klausimas, ar: query, params ar body?

			const result = deleteBook(req.db, req.query.id);
			if (result) {
				res.status(200).json({
					status: 'success',
					message: 'Succesfully deleted data',
					id: 'placeholder',
				});
			} else {
				res
					.status(404)
					.json({ message: 'Cant find book by id "placeholder" ' });
			}
		} catch {
			res.status(500).json({ message: 'Server error' });
		}
	},
};
