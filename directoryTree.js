var fs = require('fs');
var path = require('path');

let directoryTree = (dir_path) => {
  var relative_path = dir_path.split('/');
  var relative_path = relative_path[relative_path.length - 1];
  var tree = {};



  tree = traverse(tree);

  function traverse(tree){

    //if the traverse() func is called for the first time start with '/'
    if (!tree._path){ tree._path = '/';};

    //what is the path that is currently being traversed
    var current_path = path.join(dir_path, tree._path);

    //read the files and directories in the current path
    var files = fs.readdirSync(current_path);

    if (!tree) { var tree = {} };
    tree._files = [];
    tree._dirs = [];

    //for each file or directory in the current traversal point
    files.forEach(function(subitem){

      //path to the current file/directory
      var path_of_subitem = path.join(current_path, subitem);

      //check weather it's a file or a dir
      var isDir = fs.statSync(path_of_subitem).isDirectory();
      var isFile = fs.statSync(path_of_subitem).isFile();

      if ( isFile ) {
        //if file just create _files array
        tree._files.push(subitem);
      } else if ( isDir ) {

        //if dir create _dirs array
        tree._dirs.push(subitem);
        tree[subitem] = {};
        tree[subitem]._path = path.normalize(tree._path + '/' + subitem);

        //and resrusevly call the traverse() function and move to the next traversal point
        tree[subitem] = traverse(tree[subitem]);
      }

    });
    return tree;
  }


return tree;

}

console.log(directoryTree('./zz'))
