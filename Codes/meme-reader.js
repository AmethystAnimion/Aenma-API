const fs = require('fs');
let meme = [];

exports.run = () => {
  fs.readdir('/Images/Meme/', (err, files) => {
    if (!files.endsWith('.png');
    
    files.forEach(file => {
      let memeName = file.split('.')[0];
      
      meme.push(memeName);
    });
  });
  
  return meme;
}
