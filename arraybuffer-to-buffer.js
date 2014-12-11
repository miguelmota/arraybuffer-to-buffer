(function(root) {

  function ArrayBufferToBuffer(ab) {
    var buffer = new Buffer(ab.byteLength);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) {
        buffer[i] = view[i];
    }
    return buffer;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = ArrayBufferToBuffer;
    }
    exports.ArrayBufferToBuffer = ArrayBufferToBuffer;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return ArrayBufferToBuffer;
    });
  } else {
    root.ArrayBufferToBuffer = ArrayBufferToBuffer;
  }

})(this);
