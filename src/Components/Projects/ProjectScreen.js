import React, { Fragment } from 'react';
import Project from './Project';
import STORE from './STORE';
import './Project.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default class ProjectScreen extends React.Component {
    render() {
        let projectArray = [];

        for (let i = 0; i < STORE.projects.length; i++) {
            let current = STORE.projects[i];

            projectArray.push(<Project current={current} key={i} />);
        }

        return (
            <Fragment>
                <Navbar />
                <section id='projects'>
                    <div id='project-title'>
                        <h2 >Projects</h2>
                    </div>

                    <div className='color-box'>
                        <ul id='project-list' className='center-box'>
                            {projectArray}
                        </ul>
                    </div>
                </section>
                <Footer />
            </Fragment>

        );
    }
}