var test = require('tape');
var ArrayBufferToBuffer = require('../arraybuffer-to-buffer');

function bufferEqual(a, b) {
  for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
  }
  return true;
}

test('ArrayBufferToBuffer', function (t) {
  t.plan(2);

  var str = 'abc';

  var ab = new ArrayBuffer(12);
  var v = new DataView(ab);
  [].slice.call(str).forEach(function(s, i) {
    v[i] = s.charCodeAt(0);
  });

  var b = ArrayBufferToBuffer(ab);

  t.strictEqual(bufferEqual(b, ab), true);
  t.equal(b.toString('utf8', 0, 3), str);
});
