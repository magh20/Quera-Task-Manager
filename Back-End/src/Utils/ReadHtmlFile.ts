import fs from 'fs';
const readHTMLFile = function(path:string, callback:any) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
           callback(err);                 
        }
        else {
            callback(null, html);
        }
    });
};

export default readHTMLFile;