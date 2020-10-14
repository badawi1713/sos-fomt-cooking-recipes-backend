module.exports = {
  response: (res, message, result, status, error) => {
    let resultPrint = {};
    resultPrint.error = error || false;
    resultPrint.status = status || 200;
    resultPrint.message = message || null;
    resultPrint.result = result || [];
    return res.status(resultPrint.status).json(resultPrint);
  },
};
