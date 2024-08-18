const modelResponse = (res, error, response) => {
  if (error) {
    return res.status(500).json({
      success: 0,
      message: error,
    });
  }
  return res.status(200).json({
    success: 1,
    message: response,
  });
};
module.exports = modelResponse;
