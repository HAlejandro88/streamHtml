navigator.mediaDevices.getUserMedia({audio: true, video: true})
         .then(stream => {
             console.log(stream);
             let video = document.querySelector('#video');
                video.srcObject = stream;
            // video.onloadedmetadata = ev => video.play(); */
             
                video.onloadedmetadata = video.play();

         })
         .catch(e => console.error(e));



function cambiar() {
    let title = document.querySelector('#titulo');
    title.textContent = 'Hola mundo'
}

cambiar();