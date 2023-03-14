const log = require('../configs/log-config');

function createResErr(err) {
  log.debug({
    message: 'creating response error',
    meta: err
  });

  return { status: 500, message: 'unexpected error', errInfo: err };
}

module.exports = createResErr;
