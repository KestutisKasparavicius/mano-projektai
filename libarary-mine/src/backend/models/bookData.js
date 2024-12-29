export async function GetBooks(db) {
	try {
		const [rows, fields] = await db.query(
			`
            SELECT  id, pavadinimas, autorius, kategorija, aprasimas, isbn, isleidimo_data, puslapiai, knygos_perziura
            FROM knyga;
            `
		);
		return rows;
	} catch (err) {
		console.log(err);
		return null;
	}
}

export async function GetBookById(db, id) {
	try {
		const [rows, fields] = await db.query(
			`
                SELECT  id, pavadinimas, autorius, kategorija, aprasimas, isbn, isleidimo_data, puslapiai, knygos_perziura
            FROM knyga WHERE id = (?);
            `,
			[id]
		);
		if (rows.length) {
			return rows;
		} else {
			return null;
		}
	} catch (err) {
		console.log(err);
		return null;
	}
}

export async function CreateBook(db, data) {
	try {
		const [result] = await db.query(
			`
            INSERT INTO knyga(pavadinimas, autorius, kategorija, aprasimas, isbn, isleidimo_data, puslapiai, knygos_perziura
            (?,?,?,?,?,?,?,?)`,
			[
				data.name,
				data.author,
				data.category,
				data.description,
				data.isbn,
				data.release_datta,
				data.pages,
				data.preview,
			]
		);
		if (result.insertId) {
			return result.insertId;
		} else {
			return null;
		}
	} catch (err) {
		console.log(err);
		return null;
	}
}

export async function editBook(db, data) {
	try {
		const [result] = await db.query(
			`
            UPDATE knyga SET pavadinimas=(?),autorius=(?),kategorija=(?),aprasimas=(?),isbn=(?),isleidimo_data=(?),puslapiai=(?),knygos_perziura=(?) 
            WHERE id = (?);
            `,
			[
				data.name,
				data.author,
				data.category,
				data.description,
				data.isbn,
				data.release_datta,
				data.pages,
				data.preview,
				data.id,
			]
		);
		if (result.affectedRows > 0) {
			return true;
		} else {
			return false;
		}
	} catch (err) {
		console.log(err);
		return null;
	}
}

export async function deleteBook(db, id) {
	try {
		const [result] = db.query(
			`
            DELETE FROM knygos WHERE id = ?`,
			[id]
		);
		if (result.affectedRows > 0) {
			return true;
		} else {
			return false;
		}
	} catch (err) {
		console.log(err);
		return null;
	}
}
