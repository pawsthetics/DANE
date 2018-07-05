    var array = []

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
      console.log(array);
      window.alert("Data has been successfully stored")
    //test to see if its reading array properly
    //document.write(array[3][0]);
    }
function errorHandler(evt) {
      if(evt.target.error.name == "NotReadableError") {
          alert("Canno't read file !");
      }
    }
    
//--------------------------------------------------------------
   

    //console.log(by_location);

    //const result = array.filter(word => word == 'loc1');
