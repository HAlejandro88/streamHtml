# Stream Web

controlar la camara y microfono mediante html y javaScript

```javaScript
navigator.mediaDevices.getUserMedia({audio: true, video: true})
         .then(stream => {
             console.log(stream);
             let video = document.querySelector('#video');
                video.srcObject = stream;
            // video.onloadedmetadata = ev => video.play(); */
             
                video.onloadedmetadata = video.play();

         })
         .catch(e => console.error(e));
```
