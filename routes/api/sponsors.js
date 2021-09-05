module.exports = (req, res) => {
	if (!req.files || Object.keys(req.files).length === 0) {
		res.status(400).send({ message: "No files were uploaded." });
		return;
	}

	const uploadPath = `${__dirname}/../../uploads/sponsors/${req.files.file.name}`;
	req.files.file.mv(uploadPath, (err) => {
		if (err) {
			return res.status(500).send(err);
		}
		res.status(200).json({ message: "Success" });
	});
	
}