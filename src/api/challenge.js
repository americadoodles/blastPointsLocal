const axios = require('axios');

const challenge = async () => {
  try {
    const response = //await axios.post(api_base_url + '/v1/dapp-auth/challenge');
    await axios({
      method: 'post', //you can set what request you want to be
      url: 'https://waitlist-api.develop.testblast.io/v1/dapp-auth/challenge',
      data: {
        contractAddress: '0x3a5C5874B59985A09Ed6676b738d46bc2CA98c00',
        operatorAddress: '0x7198f3C4264d1aAE2c2d12eA7695dc57A7A306cC',
      },
      headers: {},
    })
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

module.exports = challenge;
