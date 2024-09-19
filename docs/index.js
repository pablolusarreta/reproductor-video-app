const videoInput = document.getElementById('fichero');
const videoPlayer = document.getElementById('reproductor');
const pie = document.getElementById('pie');

videoInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        videoInput.style.display = "none"
        pie.style.display = "none"
        
        const videoURL = URL.createObjectURL(file);
        videoPlayer.src = videoURL;
        videoPlayer.load();
        videoPlayer.play();
        videoPlayer.onended = ()=>{
            location.reload()
        }
    }
});
const final = ()=>{
    
}
 