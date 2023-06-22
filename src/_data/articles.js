const fetch = require("node-fetch");

API =
  "https://api.nytimes.com/svc/topstories/v2/nyregion.json?api-key=RuG9N6lD1Xss81PdRbmhuiJHjuiPEt6R";

module.exports = function () {
  return new Promise((resolve, reject) => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => resolve(data.results))
      .catch((e) => reject(e));
  });
};