    var array = [];

    var by_location = {};
    var loc1array = [];

//-------------------------------------------------------------------------------
    function handleFiles(files) {
      // Check for the various File API support.
      if (window.FileReader) {
          // FileReader are supported.
          getAsText(files[0]);
      } else {
          alert('FileReader are not supported in this browser.');
      }
    }


    function getAsText(fileToRead) {
      var reader = new FileReader();
      // Read file into memory as UTF-8      
      reader.readAsText(fileToRead);
      // Handle errors load
      reader.onload = loadHandler;
      reader.onerror = errorHandler;
    }

    function loadHandler(event) {
      var csv = event.target.result;
      processData(csv);
    }

    
    function processData(csv) {
      var allTextLines = csv.split(/\r\n|\n/)

       for(let i = 0; i < allTextLines.length; i++) {
         let row = allTextLines[i].split(',');

         let col = [];
      

        for (let j =0; j < row.length; j++) {
          var string = row[j];
          var num = string.replace(/['"]+/g, '');
          col.push(num);
         }
         array.push(col);
         }

//--------------------------------------------------------------------------

          var array2 = array.map(function(val){
           return val.slice(0, -2);
          });

          console.log(array2);
          for (var  k= 1; k < array2.length; ++k) {
            var row2 = array2[k];
          if (by_location[row2[0]] === undefined) by_location[row2[0]] = [];
            by_location[row2[0]].push(parseInt(row2[1]));
          }
          loc1array = by_location[row2[0]];
          window.alert("Data has been successfully stored")
          console.log(by_location);
          console.log(by_location[row2[0]]);
          //console.log(loc1array);
      //console.log(by_location['loc1']);
      //console.log(by_location[row2[0][0]]);
      //console.log(by_location[row2[0]]["loc1"]);
      //console.log(by_location[row2[1][0]]);
      //console.log(by_location[row2[loc2]]);
      //console.log(by_location.loc1[0]);
      //console.log(by_location[loc1[0]]);
      //console.log(by_location.row2[0]);
      //console.log(by_location[row2[0, 1]]);
      //console.log(by_location[0]);
      //console.log(by_location.row2[0]);

    //test to see if its reading array properly
    //document.write(array[3][0]);
    }


//---------------------------------------------------------------------------

function errorHandler(evt) {
      if(evt.target.error.name == "NotReadableError") {
          alert("Canno't read file !");
      }
    }
    
//---------------------------------------------------------------------------

function analyze() {
  // This is sum:
  var sum1 = 0;
  for (var r = 0; r<loc1array.length; r++){
    
     sum1 += loc1array[r];
   }
   console.log(sum1);

   // This is mean:
   var mean1 = sum1 / loc1array.length;
   console.log(mean1);

   // This is variance:
  // var variance = 
  //   return arr1.mean(array.map(function(num) {
  //     return Math.pow(num - mean, 2);
  //   }));


}

