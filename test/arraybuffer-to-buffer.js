var test = require('tape');
var ArrayBufferToBuffer = require('../arraybuffer-to-buffer');

function arrayBufferEqualBuffer(a, b) {
  for (var i = 0; i < a.length; i++) {
      if (a.getUint8(i) !== b[i]) return false;
  }
  return true;
}

test('ArrayBufferToBuffer', function (t) {
  t.plan(2);

  var str = 'abc';

  var ab = new ArrayBuffer(12);
  var v = new DataView(ab);
  str.split('').forEach(function(s, i) {
    v.setUint8(i, s.charCodeAt(0));
  });

  var b = ArrayBufferToBuffer(ab);

  t.strictEqual(arrayBufferEqualBuffer(ab, b), true);
  t.equal(b.toString('utf8', 0, 3), str);
});
