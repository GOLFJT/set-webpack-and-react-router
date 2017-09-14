import React from 'react';
import style from './style.scss'

class Home extends React.Component{

    constructor() {
        super();
        this.state = {
            text: 'Hello'
        }
    }

    updateText(event) {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1 className={style.red}>{this.state.text} golf</h1>
                <input type="text" onChange={this.updateText.bind(this)} />
            </div>
        )
    }
}

export default Home
