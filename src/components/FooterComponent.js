import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer align="center" style={{ padding: '100px 0px 20px'}}>
                    <p>&copy;  VoaVoa-2022 </p>
                </footer>
            </div>
        )
    }
}

export default FooterComponent