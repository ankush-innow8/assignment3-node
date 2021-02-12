const GasStation = require('../models/gasStationModel')

const postStation = async (req, res, next) => {
  try {
    const isGasStation = await GasStation.findOne({
      stationNumber: req.body.stationNumber,
    })
    if (isGasStation) return res.json({ err: 'This station already exists!' })
    const gasStation = new GasStation(req.body)
    await gasStation.save()
    res.status(200).json(gasStation)
  } catch (error) {
    res.status(511).send(error.message)
  }
}

const getStationBySector = async (req, res, nex) => {
  const { sector } = req.body
  try {
    const station = await GasStation.find()
      .where('sector')
      .lte(sector + 5)
      .gte(sector - 5)
    console.log(station)
    if (!station) return res.json({ err: 'No stations nearby' })
    res.status(200).json(station)
  } catch (error) {
    res.status(511).send(error.message)
  }
}

module.exports = { postStation, getStationBySector }
