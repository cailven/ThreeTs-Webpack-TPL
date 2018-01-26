var fs = require('fs');
var path = require("path");

var resolve = path.resolve();

// var file = "/web/fla/loading/loading.js";
var file = "/web/fla/intro/intro.js";


function copy(src, dst) {

    var stream = fs.createReadStream(src).pipe(fs.createWriteStream(dst));

    // fs.writeFileSync(dst, fs.readFileSync(src));
    stream.on('finish', function () {
        modify(dst);
    });
}

copy(resolve + file, resolve + file + "Ass.js");

var string;
var begin = "module.exports =";
var end = "";
var end_splice = "(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{})";

function modify(_fileName) {
    fs.open(_fileName, 'r+', function (err, fd) {
            if (err) {
                console.error(err);
                return;
            } else {
                var buffer = new Buffer(999000000);
                // console.log(buffer.length);
                //每一个汉字utf8编码是3个字节，英文是1个字节
                fs.read(fd, buffer, 0, buffer.length, null, function (err, bytesRead, buffer) {
                    if (err) {
                        throw err;
                    } else {
                        var str = buffer.slice(0, bytesRead).toString();
                        string = begin + str + end;
                        string = string.split(end_splice)[0];
                        //   console.log(string);

                        var ws = fs.createWriteStream(_fileName, {start: 0});
                        var buffer = new Buffer(string);
                        ws.write(buffer, 'utf8', function (err, buffer) {
                            console.log(_fileName + "已经生成！");
                        });

                    }
                });


            }
        }
    );

}



