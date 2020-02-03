export default class bird {

    constructor(x, y, color, context) {
        this.x = x;
        this.y = y;
        this.velocity = 5;
        //Heading in random radians from 0 to 2PI
        this.heading = (Math.random() * (Math.PI * 2));
        //Rate of change in x and y from heading * velocity
        this.dx = Math.cos(this.heading) * this.velocity;
        this.dy = Math.sin(this.heading) * this.velocity;
        //Canvas's Context
        this.c = context;
        this.color = color;
        //Used to negate flocking behavior when turning due to edges
        this.edgeBool = false;
    }


    edges() {
        let edges = false;

        //Right here it looks like I'm steering them in the direction of where they aren't supposed to be going
        //However due to canvas having the origin point in the top left the unit circle is flipped. 
        //This then steers them away from the edges.
        if (this.y < 50) edges = this.steer(Math.PI / 2);
        else if (this.y > window.innerHeight - 50) edges = this.steer((Math.PI * 3) / 2);

        //If steering to avoid edge
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

                //Finding hypotenuse between two birds === distance between them
                let distance = Math.sqrt((deltaX * deltaX) + (deltaY * deltaY));

                //If within 200 pixels and not 0
                if (distance < 200 && distance > 0) {
                    sumHeading += bird.heading;

                    //If close together they want to spread out so extra check here.
                    if (distance < 25) {
                        avoidHeading += (Math.atan(deltaY / deltaX) + Math.PI) % (Math.PI * 2);
                        avoidBirdCounter++;
                    }
                    closeBirdCounter++;
                }
            }

        });

        //So we dont divide by 0
        if (closeBirdCounter > 0) {
            let aveHeading = sumHeading / closeBirdCounter;

            let newHeading = aveHeading;

            if (avoidBirdCounter > 0) {
                let aveAvoidHeading = avoidHeading / avoidBirdCounter;
                //Making avoiding really close birds 3 times more important than trying to align with fellow birds
                newHeading += aveAvoidHeading * 3;
                //Average heading
                newHeading /= 2;
            }

            if (!this.edgeBool) {

                this.steer(newHeading);
            }


            this.dx = Math.cos(this.heading) * this.velocity;
            this.dy = Math.sin(this.heading) * this.velocity;

        }

    }


    /*These methods were the trickiest to figure out
    Steer determines which direction to steer. 
    An example of why this is nessesary: 
    If the new heading is 15PI/8 and you are heading PI/8 it is easier to 
    turn right or in the negative direction or counter-clockwise as it's only 
    PI/4 to reach the desired heading vs 7PI/4
    */
    steer(heading) {
        let right = this.heading - heading;
        //If right is negative we want to add 2PI to it for a valid comparison
        //Using our example above right would be -14PI/8 or -7PI/4 after subtraction
        //After adding 2PI to it it would become PI/4 to turn right.
        if (right <= 0) right += (Math.PI * 2);


        //As I mentioned in the README I got the boids working as intended but I wanted to add some extra chaos
        //Instead of subtracting here which would lead to more orderly conduct as seen in the real life
        //I chose to create a bias for the bird's turning. This causes them to overcorrect. 
        let left = heading + this.heading;
        //If left is greater than 2PI we want to find the modulus for a valid comparison
        //Using our example above left would become 2PI where normally it would be 7PI/4
        //As expected this leads to erratic behavior and ensures the animation doesn't stagnate with every bird flying in parallel
        if (left > (Math.PI * 2)) left %= Math.PI * 2;

        //Whichever takes the least time to turn (barring the chaos on turning left) it steers in that direction.
        if (right < left) this.steerRight(heading);
        else this.steerLeft(heading);

        return true;
    }

    steerLeft(heading) {
        //Heading plus equals average between heading and current heading with a turn radius of 1/30th
        //of the average. Could also be written as / 2(30)
        this.heading += (heading + this.heading) / 60;
        //If this sets this.heading over 2PI put it back within range of 0-2PI
        if (this.heading >= (Math.PI * 2)) {
            this.heading %= (Math.PI * 2);
        }

        this.dx = Math.cos(this.heading) * this.velocity;
        this.dy = Math.sin(this.heading) * this.velocity;
    }

    steerRight(heading) {
        //Same thing as above except we subtract that value.
        this.heading -= (heading + this.heading) / 60;
        //If negative bring it back within range of 0-2PI
        if (this.heading <= 0) {
            this.heading += (Math.PI * 2);
        }

        this.dx = Math.cos(this.heading) * this.velocity;
        this.dy = Math.sin(this.heading) * this.velocity;
    }


    render() {
        //Checks if bird is near edge.
        this.edges();

        //Applies rate of change for x and y
        this.x += this.dx;
        this.y += this.dy;

        //Allows birds to teleport from right to left and left to right.
        if (this.x < 0) this.x = window.innerWidth;
        else if (this.x > window.innerWidth) this.x = 0;

        //Allows birds to teleport from top to bottom and bottom to top.
        if (this.y < 0) this.y = window.innerHeight;
        else if (this.y > window.innerHeight) this.y = 0;


        //Displaying bird on canvas
        this.c.beginPath();
        this.c.moveTo(this.x + this.dx * 2.5, this.y + this.dy * 2.5);
        this.c.lineTo(this.x, this.y);
        this.c.strokeStyle = this.color;
        this.c.stroke();

    }

}