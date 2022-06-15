const service = require("./theaters.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// list method, returns service request data listing all theaters in database 
async function list(req, res) {
    const data = await service.list();
    res.json({ data });
  }

module.exports = {
    list: [asyncErrorBoundary(list)],
    
}