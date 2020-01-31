# Aedan Warfield
My Portfolio

Live: https://aedan-warfield-portfolio.now.sh/

## Summary

----

Originally I wasn't going to use react for this portfolio, as it's a bit overkill, but I wanted to challenging myself to use a canvas in React. This is my first time using a canvas at all. 

I used object oriented programming and ES6's class functionality to create the landing page. It is a simulation of 'boids'.

Boids are the representation of movement between animals such as birds or fish. They are governed by three distict properties. Each animal, which I referred to as a bird, try to align their direction of movement with bird's around them. They also try to separate a bit if they are too close to one another which also helps avoid head-on collisions. The final rule they are governed by is cohesion which makes them steer towards the average center of nearby flocks. If you are interested to learn more about boids this is the reference paper I used. https://www.red3d.com/cwr/boids/

I decided to take out the cohesion rule from each bird's behavior because I wanted to make the simulation more chaotic. When I was using the cohesion rule it just didn't look as good due to the uniformity of the movement. I still am using the Alignment and Separation rules in the simulation.

## Technology Used

Javascript, OOP, HTML Canvas, React, CSS, HTML