import React, { Fragment } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './About.css';

export default function About() {
    return (
        <Fragment>
            <Navbar />
            <section id='about-me'>
                <div id='about-me-title'>
                    <h2>About Me</h2>
                </div>

                <div className='about-me-info'>
                    <p>I was born in Utah and have lived here my entire life. My favorite place I’ve visited is the pacific northwest, specifically western Washington
                        in the Seattle area due to the rain, beautiful green forests and cold Pacific Ocean. I would take a grey overcast sky over a blue sunny one any
                        day and I prefer places with freezing winters rather than impossibly hot summers.</p>
                    <p>I have been interested in problem solving, math, and logic puzzles for as long as I can remember with coding being a more recent development.
                        The best part about coding for me is if you put your mind to it, pretty much anything is possible within the code you write. I also enjoy the
                        idea that someone is out there looking for a product I will eventually develop.</p>
                    <p>Something strange about me is my habit of learning during my relaxation time. If I'm doing something that doesn’t require my full attention
                        I often choose to listen to an educational video in the background. I am also never without a book, so if there is down time, I read. </p>
                </div>

            </section>
            <Footer />
        </Fragment>

    );
}