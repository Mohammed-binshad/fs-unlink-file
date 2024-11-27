const fs = require("fs");

fs.unlink('message-one.txt', (err) => {
        if (err) throw err;
        console.log('File deleted successfully.');
    });