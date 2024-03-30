var audio_element = document.getElementById("audio");
var button_element = document.getElementById("speaker_status");
button_element.innerHTML = "&#x1F50A;"
var audio_on = true, audio_off = false

button_element.addEventListener("click", function() {
    
    if(audio_on == true && audio_off != true){
        audio_off = true
        audio_on = false
        button_element.innerHTML = "&#x1F507;"
        audio_element.muted = true


    } else if(audio_off == true && audio_on != true){
        audio_off = false
        audio_on = true 
        button_element.innerHTML = "&#x1F50A;"
        audio_element.muted = false
    }

});


