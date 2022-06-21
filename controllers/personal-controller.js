const fs = require('fs/promises');


async function writeDataToFile(data,userId) {
    data.status="pending";
     data.id=userId;
    let fileContents = await fs.readFile('persondata.json', { encoding: 'utf8' });
    fileContents = JSON.parse(fileContents);
    fileContents.push(data);
    await fs.writeFile('persondata.json', JSON.stringify(fileContents, null, 2), { encoding: 'utf8' });

}

async function ReadApproveUserdata(user) {

  userId=user.id;
  status=user.status;
  let fileContents = await fs.readFile('persondata.json', { encoding: 'utf8' });
  fileContents = JSON.parse(fileContents);
  for(i=0;i<fileContents.length;i++) {
    // console.log("approveduserid",fileContents[i].id);
    // console.log("userId",userId);
    if(fileContents[i].id===userId && fileContents[i].status){

       fileContents[i].status=status
      // console.log("approveduser",fileContents[i].id);
      // console.log("userId",userId);
      //  console.log("fileContents[i].status",fileContents[i].status);
     
    }
    
  
  }
  await fs.writeFile('persondata.json', JSON.stringify(fileContents, null, 2), { encoding: 'utf8' });
 

}

  


module.exports = {
  writeDataToFile,
  ReadApproveUserdata
};
