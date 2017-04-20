// 引入fs文件处理模块
var fs = require("fs");
var path = 'file'
fs.readdir(path, function(err, files) {

    // files是名称数组
    files.forEach(function(filename) {
        //运用正则表达式替换oldPath中不想要的部分
        var oldPath = path + '/' + filename,
        newPath = path + '/' + filename.replace(/16_16_/g, '16_16')

        // fs.rename(oldPath, newPath, callback) 
        fs.rename(oldPath, newPath, function(err) {
            if (!err) {
                console.log(filename + '副本替换成功!')
            } 
        })
    })
})  