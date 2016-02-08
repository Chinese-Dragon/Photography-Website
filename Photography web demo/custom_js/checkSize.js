window.onload = function() {
    document.getElementById("pictUploadFrm").addEventListener("submit",submitPhoto); 
};


function submitPhoto(e){
    var file=document.getElementById("file1");
    var max_size=1.5*1024*1024;

    if(file.files && file.files.length ==1){
        if(file.files[0].size > max_size){
            document.getElementById("sizeError").className="show";
            e.preventDefault();
        }
    }
}