module.exports = function() {
  return function(styl) {
    var nodes = require('../../../node_modules/stylus/lib/nodes/');
    require('../../../node_modules/date-utils/lib/date-utils.js');


    styl.define('reverse', function(arg){
        return arg.string.split('').reverse().join('');
    });

    styl.define('randomColor', function() {
      return new nodes.Literal('#'+Math.floor(Math.random()*16777215).toString(16));
    });

    styl.define('comment', function(auther, version) {
      var dt = new Date();
      var formatted_date = dt.toFormat("YYYY-MM-DD HH24:MI:SS");
      var str = "";
      str += "/************************"+"\n";
      str += "Auther:"+ auther+"\n";
      str += "Version:"+ version+"\n";
      str += "Build:"+ formatted_date +"\n";
      str += "************************/\n";
      return str;
    });
  }
};
