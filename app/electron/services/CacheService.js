/* eslint-disable no-else-return */
const LRU = require('lru-cache');

const cache = new LRU({ max: 50 });

const cacheSet = (key, value) => {
  cache.set(key, value);
};

const cacheGet = (key) => {
  const value = cache.get(key);
  if (value) {
    return value;
  } else {
    return null;
  }
};

const cacheGetAll = () => {
  const entries = Array.from(cache.entries());

  // parsed data
  const data = {};

  // generating data
  // eslint-disable-next-line no-restricted-syntax
  for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
    data[key] = value;
  }

  return data;
};

const getKeys = () => cache.keys();

const cacheReset = () => {
  cache.clear();
  return 'Ok';
};

module.exports = {
  cacheSet,
  cacheGet,
  cacheGetAll,
  getKeys,
  cacheReset,
};
