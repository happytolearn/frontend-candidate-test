(function () {
    "use strict";

    var inputs = [];
     function updatePreview() {
        if (this.id === "state" && this.value !== "") {
            document.getElementById(this.dataset.preview).innerHTML = ", " + this.value;
        } else {
            document.getElementById(this.dataset.preview).innerHTML = this.value;
        }
    }
    inputs = document.querySelectorAll("input[type=text],input[type=email]");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('change', updatePreview, false);
    }
   

   document.getElementById('upload-button').addEventListener('change', readURL, true);
function readURL(){
    var file = document.getElementById("upload-button").files[0];
			var reader = new FileReader();
			reader.onloadend = function(){
				document.getElementById('preview-img').style.backgroundImage = "url(" + reader.result + ")";        
			}
			if(file){
				reader.readAsDataURL(file);
			}else{
			}
}

      
}());


