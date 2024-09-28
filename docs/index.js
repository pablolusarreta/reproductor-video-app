const videoInput = document.getElementById('fichero');
const videoPlayer = document.getElementById('reproductor');
const pie = document.getElementById('pie');
const boton = document.getElementById('abrir');

videoInput.addEventListener('change', function () {
    document.documentElement.requestFullscreen()
    const file = this.files[0];
    if (file) {
        videoInput.style.display = "none"
        boton.style.display = "none"
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


boton.addEventListener('click', function () {
    videoInput.change()
});