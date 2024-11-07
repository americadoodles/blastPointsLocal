const challenge = require('./api/challenge');

const run = async () => {
  const request = {
    contractAddress: '0x25046Be8F8D7b0099bE9ac68eb424e540DbA42f0',
    operatorAddress: '0x083eA894FC2bEa06C705C49e4A84C52323f51652',
  };

  const response = await challenge(request);
  console.log(response);
};

run();
