import util from 'util'

import app from './config/app'
import logger from './util/logger'
import config from './config/config'
import passport from './config/passport'
import routes from './controller'

app.use('/', routes)

app.get('/login/google',
  passport.authenticate('google', {
    scope: ['email', 'profile']
  })
)

app.get('/oauth2/google/callback', (req, res, next) => {
  passport.authenticate('google', (err, user, info) => {
    if (err) {
      logger.warn(util.inspect(err))
      res.json('failed retrieving user info')
      return
    }

    logger.debug('user come back...')
    logger.debug(util.inspect(user))
    res.json(user)
  })(req, res, next)
})

app.listen(config.port, () => {
  logger.debug('app listening to port: ' + config.port)
})
