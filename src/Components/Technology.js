import React, { Component } from 'react';

class Technology extends Component {
    render() {
        return (
            <section id="technology">
                <div className="grid-container">
                    <div className="card">
                        <div className="content">
                            <h2>Angular</h2>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLijejwnUfBhvDnGs20wpokuej1ACS04WV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p> Tutorials or quick demos regarding Angular and Stackblitz </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <h2>Node-RED</h2>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLijejwnUfBhvF_TfhsPggYHdDfGcdPiM9" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p> Tutorials or quick demos regarding Node-RED, a low code programming tool designed on node.js </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <h2>Machine Learning</h2>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLijejwnUfBhvh0GukXIlnoyUrZAy3ih7r" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <p> My journey into the world of Data Science and ML as a beginner </p>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Technology;