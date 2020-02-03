import React, { Fragment } from 'react';

export default function Project(props) {

    let gitHub = props.current.gitHub
        ? <a href={`${props.current.gitHub}`} target="_blank" rel="noopener noreferrer" className="a-block">Github</a>
        :
        <Fragment >
            <a href={`${props.current.clientGitHub}`} target="_blank" rel="noopener noreferrer" className="a-block">Client GitHub</a>
            <a href={`${props.current.serverGitHub}`} target="_blank" rel="noopener noreferrer" className="a-block" >Server Github</a>
        </Fragment>;


    let imgArray = [];
    for (let j = 0; j < props.current.tech.length; j++) {
        imgArray.push(
            <img src={require(`../../Images/Tech/${props.current.tech[j]}.png`)}
                title={`${props.current.tech[j]}`}
                alt={`The logo for ${props.current.tech[j]}`}
                className='tech-img'
                key={j} />
        );

    }

    let thumbnailModifier = '-mobile';
    let width = window.innerWidth;
    if (width > 550 && width < 950) thumbnailModifier = '-short';
    if (width > 1500) thumbnailModifier = '';

    return (
        <li className='js-project' >
            <h3>{props.current.title}</h3>
            <div className='img-container'>
                <img src={require(`../../Images/Thumbnail/${props.current.img}${thumbnailModifier}.png`)} alt={`${props.current.imgAlt}`} className='project-img' />
                <div className='tech-stack'>
                    {imgArray}
                </div>
            </div>
            <div className='desc-container'>
                <p>{props.current.desc}</p>
            </div>
            <div className='link-container'>
                <a href={`${props.current.live}`} target="_blank" rel="noopener noreferrer" className="a-block">Live</a>
                {gitHub}
            </div>
        </li >
    );


}
