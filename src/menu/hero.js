import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class hero extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            'items': [],

        }
    }
    componentDidMount() {
        const url = "http://127.0.0.1:3001/get";


        fetch(url)
            .then((response) => response.json())
            .then((responsejson) => {
                this.setState({
                    'items': responsejson,
                    // hero: responsejson[0],
                    // loading : false,
                    // heroname: responsejson[0],
                })
                console.log("DATA")
                console.log(responsejson)
                console.log(responsejson[0].hero_name)
            })

    }

    render() {
        let x = this.state.heroname
        return (



            <div>

                {this.state.items.map(function (item, index) {
                    return <h1>{item.hero_name}</h1>
                })}
            </div>




        );
    }
}

export default hero;
