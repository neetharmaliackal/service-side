const fs = require('fs/promises');


async function writeDataToFile(data,userId) {
    data.status="pending";
     data.id=userId;
    let fileContents = await fs.readFile('persondata.json', { encoding: 'utf8' });
    fileContents = JSON.parse(fileContents);
    console.log("filecontent",fileContents);
    fileContents.push(data);
    // fileContents.push(userId);
    await fs.writeFile('persondata.json', JSON.stringify(fileContents, null, 2), { encoding: 'utf8' });

}

// async function writeApprovedUsersToFile(data,userId) {
 
//   let fileContents = await fs.readFile('ApprovedPersons.json', { encoding: 'utf8' });
//   fileContents = JSON.parse(fileContents);
//   console.log("filecontent",fileContents);
//   fileContents.push(data);
//   fileContents.push(userId);
//   await fs.writeFile('ApprovedPersons.json', JSON.stringify(fileContents, null, 2), { encoding: 'utf8' });

// }
  


module.exports = {
  writeDataToFile,
  // writeApprovedUsersToFile
};
