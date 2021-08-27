module.exports = (req, res) => {
	const a = "AB"

	if (!req.files || Object.keys(req.files).length === 0) {
		res.status(400).send({ message: "No files were uploaded." });
		return;
	}
	if (req.params.team === "A" || req.params.team === "B") {
		console.log(req.files);

		const uploadPath = `${__dirname}/../../uploads/Logo${req.params.team}.png`;
		req.files.file.mv(uploadPath, function (err) {
			if (err) {
				return res.status(500).send(err);
			}
			res.status(200).json({ message: "Success", team: req.params.team });
		});

	} else {
		res.status(500).send({ message: "Invalid team provide" });
	}
}