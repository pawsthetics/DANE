    var array = []
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

        for(let i = 1; i < allTextLines.length; i++) {
          let row = allTextLines[i].split(',');

          let col = [];

          for (let j =0; j < row.length; j++) {
            col.push(row[j]);
          }
          array.push(col);

         
    for (var  j= 1; j < array.length; ++j) {
      var row2 = array[j];
    if (by_location[row2[0]] === undefined) by_location[row2[0]] = [];
      by_location[row2[0]].push(row2[1]);
  }
          }
      console.log(array);
      window.alert("Data has been successfully stored")
      console.log(by_location);
    //test to see if its reading array properly
    //document.write(array[3][0]);
    }
function errorHandler(evt) {
      if(evt.target.error.name == "NotReadableError") {
          alert("Canno't read file !");
      }
    }
    
//--------------------------------------------------------------
   

  

    //const result = array.filter(word => word == 'loc1');
