   const { exec } = require('child_process');

   exec('some-command', (error, stdout, stderr) => {
       if (error) {
           console.error(`Error: ${stderr}`);
           console.log("exited with code", error.code);
           return;
       }
       console.log(`Output: ${stdout}`);
       console.log("exited with code", 0); // Assuming 0 is a success code
   });
   