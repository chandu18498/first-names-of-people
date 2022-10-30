const peopleNames = require("../country/state/city/index.js");

const firstNames = require("../utilities/utils/index.js");

const getPeopleInCity = (names) => {
  const result = firstNames(names);

  return result;
};

module.exports = getPeopleInCity(peopleNames);
