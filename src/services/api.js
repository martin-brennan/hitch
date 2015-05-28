var Promise = require('bluebird');

class API {
  constructor(root, protocol = "http") {
    this.root = `${protocol}://${root}`;
  }

  get(route) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest;
      request.addEventListener('error', (event) => {
        reject(event);
      });
      request.addEventListener('load', (event) => {
        var target = event.target;
        var response = {
          data: JSON.parse(target.responseText),
          status: target.statusText,
          code: target.status
        }
        resolve(response);
      });
      request.open('GET', `${this.root}/${route}`);
      request.send();
    })
  }
}

export default API;
