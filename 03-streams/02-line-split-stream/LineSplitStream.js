const stream = require('stream');
const os = require('os');

class LineSplitStream extends stream.Transform {
  constructor(options) {
    super(options);
    this.data = '';
  }

  _transform(chunk, encoding, callback) {
    this.data += chunk;
    const eolIndex = this.data.indexOf(os.EOL);
    if (eolIndex !== -1) {
      callback(null, this.data.slice(0, eolIndex));
      this.data = this.data.slice(eolIndex + 1);
    } else {
      callback();
    }
  }

  _flush(callback) {
    this.data.split(os.EOL).forEach((line) => this.push(line));
    callback();
  }
}

module.exports = LineSplitStream;
