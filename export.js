function downloadTxt(txt, filename) {
    let txtFile;
    let downloadLink;
    txtFile = new Blob([txt], {type: "text/txt"});
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(txtFile);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

function exportTableToTxt(filename) {
    filename =  generateFileName();
    lastMessageDigit();
    let semaphore = generateSemaphore();
    let txt = [];
    let sem = [];
    let rows = document.querySelectorAll("table tbody .tr");
    
    for (var i = 0; i < rows.length; i++){
        var row = [], cols = rows[i].querySelectorAll(".export");
        
        for (var j = 0; j < cols.length; j++) {
            if (cols[j].type == "text" || cols[j].type =="hidden" || cols[j].type == "select-one")
                row.push(cols[j].value);
        }
        txt.push(row.join(","));
    }
    
    txt.push(md5(txt));

    downloadTxt(txt.join("\n"), filename);
    downloadTxt(sem,semaphore);
}

//Generowanie nazwy pliku i semafora.
function generateFileName(){
    let x = $("#Priority  option:selected").text();
    let y = $("#Session option:selected").text();
    if(x === "Yes"){
       let now = new Date();
       let filename = 'TPTR.' + "02" + y +".D"+ now.getFullYear().toString().substr(-2) + ""+ `${now.getMonth() + 1}`.padStart(2, 0) + "" + now.getDate();
       return filename;
    }
    else{
       let now = new Date();
       let filename = 'TRAN.' + "03" + y +".D"+ now.getFullYear().toString().substr(-2) + ""+ `${now.getMonth() + 1}`.padStart(2, 0) + "" + now.getDate();
       return filename;
    }
}

function generateSemaphore(){
    let x = $("#Priority  option:selected").text();
    let y = $("#Session option:selected").text();
    if(x === "Yes"){
       let now = new Date();
       let filename = 'TPTR.' + "02" + y +".D"+ now.getFullYear().toString().substr(-2)+ ""+ `${now.getMonth() + 1}`.padStart(2, 0) + "" + now.getDate() +'.SEM';
       return filename;
    }
    else{
       let now = new Date();
       let filename = 'TRAN.' + "03" + y +".D"+ now.getFullYear().toString().substr(-2) + ""+ `${now.getMonth() + 1}`.padStart(2, 0) + "" + now.getDate() +'.SEM';
       return filename;
    }
}
