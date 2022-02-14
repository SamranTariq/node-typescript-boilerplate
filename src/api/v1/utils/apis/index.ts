export {};
const axios = require('axios');
const { logger } = require('../../../utils/logger');
const { GETTYPES } = require('../interfaces/index').METHODS;

function GETAPI(url: string, config: typeof GETTYPES) {
  return new Promise(function (resolve, reject) {
    logger.info(`🛤️ Hitting get api for ${url}`);
    axios.get(url, config).then(
      (response: any) => {
        const result = response.data;
        resolve(result);
      },
      (error: any) => {
        reject(error);
      }
    );
  });
}

module.exports = { GETAPI };
