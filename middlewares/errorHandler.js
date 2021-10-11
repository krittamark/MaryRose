exports.serverError = (error, req, res, next) => {
	res.status(500).json({
		success: false,
		code: 500,
		message: error.toString()
	});
};

exports.notFoundError = (req, res, next) => {
	res.status(404).json({
		success: false,
		code: 404,
		message: "There's nothing to looking for. Please try again later."
	});
};