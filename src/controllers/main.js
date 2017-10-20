/*
* En caso de utilizar algún ORM importar modelos aqui
*/

const main = async (req, res) => {
  try {
    return res.status(200).json({ response: 'Endpoint de prueba' })
  } catch (e) {
    error(e)
    return res.status(500).send('Error on demo controller')
  }
}

module.exports = { main }
