import React , { Component } from 'react';

export default class Greetings extends Component {

    render() {
        return(
            <div className="card card-outline-primary mb-3 text-center">
                <div className="card-block">
                    <blockquote className="card-blockquote">
                    <p>{this.props.data.message}</p>
                    <footer><cite title="Source Title">{this.props.data.description}</cite></footer>
                    </blockquote>
                </div>
            </div>
        )
    }
}