import { args } from "../server.js"

const informationController = async(req, res) => {
  const { username } = req.session
    const info = {
      puerto: args.port,
      plataforma: process.platform,
      versionNode: process.version,
      memoriaTotalReservada: process.memoryUsage().rss,
      pathExec: process.execPath,
      processId: process.pid,
      capetaProyecto: process.cwd()
      }

    res.render('informationTemplate.ejs', { username, info })
}

export { informationController }