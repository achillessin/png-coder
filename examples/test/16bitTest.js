/**
 * Created by mehsisil on 4/24/15.
 */

var fs = require('fs');
var PNG = require('../../lib/png').PNG;

var png = new PNG({
        filterType: -1
    }),
    src = fs.createReadStream(process.argv[2] || './examples/test/gradient_16bit.png'),
    dst = fs.createWriteStream(process.argv[3] || '/examples/test/out/gradient_16bit.png');


png.on('parsed', function() {

    png.pack().pipe(dst);
});

src.pipe(png);