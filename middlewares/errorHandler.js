exports.serverError = (error, req, res, next) => {
	res.status(500).json({
		success: false,
		message: error.toString()
	});
};

exports.notFoundError = (req, res, next) => {
	res.status(404).json({
		success: false,
		message: "404 Not Found"
	});
};