const fs = require("fs");

function writeDataToFile(data) {
 
//  const file= fs.writeFile('persondata.json', new Buffer(JSON.stringify(data)), 
//  function (err) {
//   if (err) return console.log(err);
//     console.log('Hello World ');
//    }
//    );
fs.appendFile('persondata.json', new Buffer(JSON.stringify(data)), function (err) {
  if (err) throw err;
  console.log('Saved!');
});
const feed=fs.readFile('persondata.json', (err, data) => {
  console.log(data);
})
var userdata = [];
 userdata.push(feed);
console.log(feed);
}
  // console.log("data", data);
  //  fs.writefileSync('persondata.json',data);
  //----------------
  // user = [data];
  // if (user.length > 0) {
  //   // user = [];
  //   if(user.firstName!=data.firstName && user.lastName!=data.lastName && user.middleName!=data.middleName)
  //   { 
  //     user = [...user, data];
  //   }
  
  // } else {
  //   user = data;
  // }
  // console.log("user", user);
  //  -------------
  // user = fs.readFile('persondata.json', new Buffer(JSON.stringify(data)), 
  // function (err) {
  //  if (err) return console.log(err);
  //    console.log('Hello World ');
  //   }
  //   );
    // user = [...user, data];
    //  fs.writeFile('persondata.json', new Buffer(JSON.stringify(user)), 
    // function (err) {
    //  if (err) return console.log(err);
    //    console.log('Hello World ');
    //   }
      // );
      // console.log("user", user);
      //----------
  //  if('persondata.json' !=null){
  //    Datasaved=true;
  //    fs.appendFile('persondata.json',new Buffer(JSON.stringify(data)), function (err) {
  //     if (err) throw err;
  //     console.log('Saved!');
  //   });
  //   // fs.writefileSync('persondata.json', new Buffer(JSON.stringify(data)));
  //   // console.log('Saved!');
  // fs.appendFileSync("persondata.json",new Buffer(JSON.stringify(data)));
  //  }


module.exports = {
  writeDataToFile,
};
