import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function tailwind() {
  try {
    await mongoose.connect(config.database_url as string)
    // eslint-disable-next-line no-console
    console.log(`Database connected`)

    app.listen(config.port, () => {
      // eslint-disable-next-line no-console
      console.log(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(`Failed to connect`, err)
  }
}

tailwind()
