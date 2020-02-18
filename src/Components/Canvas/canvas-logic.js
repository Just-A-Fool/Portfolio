import bird from './bird';

function start() {
    let canvas = document.querySelector('canvas');

    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let c = canvas.getContext('2d');

        let birds = [];


        let forBirds = window.innerWidth < 900 ? 49 : 99;
        //Creates either 49 or 99 birds depending on screen width so its not so cluttered at smaller screen size.
        for (let i = 0; i < forBirds; i++) {
            let x = Math.floor((Math.random() * window.innerWidth));
            let y = Math.floor((Math.random() * window.innerHeight));

            //Slightly different red colors
            let color = `255, ${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 50)}`;

            birds.push(new bird(x, y, color, c));
        }

        //50th/100th bird is cyan
        let x = Math.floor((Math.random() * window.innerWidth));
        let y = Math.floor((Math.random() * window.innerHeight));

        birds.push(new bird(x, y, '24, 255, 236', c));



        function loop() {
            requestAnimationFrame(loop);
            c.clearRect(0, 0, window.innerWidth, window.innerHeight);

            birds.forEach(bird => {
                bird.align(birds);

                bird.render();
            });
        }

        try {

            loop();
        }
        catch (e) {
            // console.log(e)
            //Dont do anything because an error in the canvas is self contained. Typically in creating this I found the errors just delete
            //whichever bird causes the error. I believe I fixed them all but just to be safe and not kick the user to the error boundary.
        }
    }
}

export default start;




