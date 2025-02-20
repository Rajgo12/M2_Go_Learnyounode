const mymodule = require('./mymodule'); 

const directory = process.argv[2];
const extension = process.argv[3];
mymodule(directory, extension, (err, files) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  files.forEach(file => console.log(file));
});
