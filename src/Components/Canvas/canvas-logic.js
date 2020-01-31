import bird from './bird';

function start() {
    let canvas = document.querySelector('canvas');

    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let c = canvas.getContext('2d');

        let birds = [];

        for (let i = 0; i < 100; i++) {
            let x = Math.floor((Math.random() * window.innerWidth));
            let y = Math.floor((Math.random() * window.innerHeight));
            let r = 10;
            let dx = Math.floor((Math.random() * 10)) + 1;
            let dy = Math.floor((Math.random() * 10)) + 1;
            birds.push(new bird(x, y, r, dx, dy, c));
        }

        birds[0].color = 'rgb(24, 255, 236)';
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
            console.log(e)
        }
    }
}

export default start;




