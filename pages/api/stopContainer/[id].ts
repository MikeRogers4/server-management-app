export default async function handler(req, res) {
    const { id } = req.query
    const util = require('util')
    const exec = util.promisify(require('child_process').exec)

    await exec(`docker stop ${id}`)
    res.status(200).end()
}