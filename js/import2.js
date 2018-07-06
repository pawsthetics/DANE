    var array = [];

    var by_location = {};

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
      var allTextLines = csv.split(/\r\n|\n/);

       for(let i = 0; i < allTextLines.length; i++) {
         let row = allTextLines[i].split(',');

         let col = [];

        for (let j =0; j < row.length; j++) {
          col.push(row[j]);
         }
         array.push(col);
          }

//--------------------------------------------------------------------------

          var array2 = array.map(function(val){
            return val.slice(0, -2);

          });


          for (var  k= 1; k < array2.length; ++k) {
            var row2 = array2[k];
          if (by_location[row2[0]] === undefined) by_location[row2[0]] = [];
            by_location[row2[0]].push(row2[1]);
          }

          window.alert("Data has been successfully stored")
          console.log(by_location);
          console.log(by_location[row2[0]]);
      //console.log(by_location[row2[0][0]]);
      //console.log(by_location[row2[0][1]]);
      //console.log(by_location[row2[1][0]]);
      //console.log(by_location[row2[loc2]]);
      //console.log(by_location.loc1[0]);
      //console.log(by_location[loc1[0]]);
      //console.log(by_location.row2[0]);
      //console.log(by_location[row2[0, 1]]);
          console.log(by_location[0]);

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
