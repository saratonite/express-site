import React , { Component } from 'react';

export default class Greetings extends Component {

    render() {
        return(
            <div className="card card-outline-primary mb-3 text-center">
                <div className="card-block">
                    <blockquote className="card-blockquote">
                    <p>Hello World</p>
                    <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>
            </div>
        )
    }
}