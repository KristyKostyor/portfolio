 
 const button=document.querySelector('#myButton');
    const audio=document.querySelector('#myAudio');
    
    button.addEventListener('click', function(){
        if(audio.paused){
            audio.play();
            button.classList.toggle('pause');
        }
    else{
        audio.pause();
        button.classList.toggle('pause');
    }
    })

