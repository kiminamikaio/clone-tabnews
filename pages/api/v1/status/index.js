const { sendError } = require("next/dist/server/api-utils");

function status(request, response) {
  response.status(200).json({ chave: "Mãe, é sagrada" });
}

export default status;
