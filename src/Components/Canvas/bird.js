export default class bird {

    constructor(x, y, r, dx, dy, context) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.velocity = 5;
        this.heading = (Math.random() * (Math.PI * 2));
        this.dx = Math.cos(this.heading) * this.velocity;
        this.dy = Math.sin(this.heading) * this.velocity;
        this.c = context;
        this.color = `rgb(255, ${Math.floor(Math.random() * 50)}, ${Math.floor(Math.random() * 50)})`;
        this.edgeBool = false;
    }


    edges() {
        let edges = false;

        if (this.y < 50) edges = this.steer(Math.PI / 2);
        else if (this.y > window.innerHeight - 50) edges = this.steer((Math.PI * 3) / 2);

        if (edges) this.edgeBool = true;
        else this.edgeBool = false;
    }

    align(flock) {
        let sumHeading = 0;
        let closeBirdCounter = 0;
        let avoidHeading = 0;
        let avoidBirdCounter = 0;

        flock.forEach(bird => {
            if (bird !== this) {
                let deltaX = this.x - bird.x;
                let deltaY = this.y - bird.y;

                let distance = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));

                if (distance < 200 && distance > 0) {
                    sumHeading += bird.heading;

                    if (distance < 25) {
                        avoidHeading += (Math.atan(deltaY / deltaX) + Math.PI) % (Math.PI * 2);
                        avoidBirdCounter++;
                    }
                    closeBirdCounter++;
                }
            }

        });

        if (closeBirdCounter > 0) {
            let aveHeading = sumHeading / closeBirdCounter;

            let newHeading = aveHeading;

            if (avoidBirdCounter > 0) {
                let aveAvoidHeading = avoidHeading / avoidBirdCounter;
                newHeading += aveAvoidHeading * 3;
                newHeading /= 2;
            }
            else {
                newHeading /= 1;
            }
            if (!this.edgeBool) {

                this.steer(newHeading);
            }


            this.dx = Math.cos(this.heading) * this.velocity;
            this.dy = Math.sin(this.heading) * this.velocity;

        }

    }

    steer(heading) {
        let right = this.heading - heading;
        if (right <= 0) right += (Math.PI * 2);

        let left = heading + this.heading;

        if (left > (Math.PI * 2)) left %= Math.PI * 2;

        if (right > left) this.steerRight(heading);
        else this.steerLeft(heading);

        return true;
    }

    steerLeft(heading) {

        this.heading -= (heading + this.heading) / 60;
        if (this.heading <= 0) {
            this.heading += (Math.PI * 2);
        }

        this.dx = Math.cos(this.heading) * this.velocity;
        this.dy = Math.sin(this.heading) * this.velocity;
    }

    steerRight(heading) {

        this.heading += (heading + this.heading) / 60;
        if (this.heading >= (Math.PI * 2)) {
            this.heading %= (Math.PI * 2);
        }

        this.dx = Math.cos(this.heading) * this.velocity;
        this.dy = Math.sin(this.heading) * this.velocity;
    }


    render() {
        this.edges();

        this.x += this.dx;
        this.y += this.dy;

        if (this.x < 0) this.x = window.innerWidth;
        else if (this.x > window.innerWidth) this.x = 0;

        if (this.y < 0) this.y = window.innerHeight;
        else if (this.y > window.innerHeight) this.y = 0;

        this.c.beginPath();
        this.c.moveTo(this.x + this.dx * 3, this.y + this.dy * 3);
        this.c.lineTo(this.x, this.y);
        this.c.strokeStyle = this.color;
        this.c.stroke();

    }

}