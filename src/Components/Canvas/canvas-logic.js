import bird from './bird';

function start() {
    let canvas = document.querySelector('canvas');

    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let c = canvas.getContext('2d');

        let birds = [];

        //Creates 99 birds
        for (let i = 0; i < 99; i++) {
            let x = Math.floor((Math.random() * window.innerWidth));
            let y = Math.floor((Math.random() * window.innerHeight));
            //Again not used in this build but good for future use if displaying a circle.
            let r = 10;
            //I used to be setting bird's rate of change for x and y randomly but decided to use the 
            //heading as the source of what it should be. This again is just for future use 
            let dx = Math.floor((Math.random() * 10)) + 1;
            let dy = Math.floor((Math.random() * 10)) + 1;
            //Slightly different red colors
            let color = `rgb(255, ${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 50)})`;

            birds.push(new bird(x, y, r, dx, dy, color, c));
        }

        //100th bird is cyan
        let x = Math.floor((Math.random() * window.innerWidth));
        let y = Math.floor((Math.random() * window.innerHeight));

        birds.push(new bird(x, y, 10, 0, 0, 'rgb(24, 255, 236)', c));



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




