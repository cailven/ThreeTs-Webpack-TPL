var fs = require('fs');
var path = require("path");

var myPath = "./../images_package";


var resolve = path.resolve() + myPath;
var tagetFile = resolve + "./../impublic/pc/js/app/pages/pics.js";
//遍历文件夹，获取所有文件夹里面的文件信息
/*
 * @param path 路径
 *
 */
function geFileList(path) {
    var filesList = [];
    readFile(path, filesList);
    return filesList;
}
//遍历读取文件
function readFile(path, filesList) {
    files = fs.readdirSync(path);//需要用到同步读取
    files.forEach(walk);

    function walk(file) {
        states = fs.statSync(path + '/' + file);
        if (states.isDirectory()) {
            readFile(path + '/' + file, filesList);
        }
        else {
            //创建一个对象保存信息
            var obj = new Object();
            obj.size = states.size;//文件大小，以字节为单位
            obj.name = file.split(".")[0];//文件名
            // obj.path = path + '/' + file; //文件绝对路径
            var path1 = path.split(resolve)[1];
            obj.path = "." + path1 + '/' + file; //文件绝对路径
            filesList.push(obj);
        }
    }
}

//写入文件utf-8格式
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, 'utf-8', complete);
    function complete() {
        console.log("文件生成成功");
    }
}

var filesList = geFileList(path.resolve() + myPath + '/images');
//filesList.sort(sortHandler);

var str = 'var manifest={';

for (var i = 0; i < filesList.length; i++) {
    var item = filesList[i];


    if (item.name != '') {
        console.log(item);
        var imageBuf=fs.readFileSync(path.resolve() + "./../images_package/images/" + item.name+".png","base64");
       // console.log(a);




        //  var desc = "{src:require('" + item.path + "'),id:'" + item.name + "'},"
          var desc =  item.name+":'data:image/png;base64," +imageBuf + "',"
           str += desc + "\n"
    }


}
//str += "];module.exports = manifest;";
str += "};";

writeFile(tagetFile, str);

