import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }
    cancel(){
        this.props.history.push('/employees');
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3" style={{padding:'20px'}}>
                    <h3 className = "text-center"> Visualizando promoção</h3>
                    <div className = "card-body text-center">
                        <div className = "row">
                            <label> Paises ou cidades: </label>
                            <div> { this.state.employee.lugares }</div>
                        </div>
                        <div className = "row">
                            <label> Valor normal: </label>
                            <div> { this.state.employee.valores }</div>
                        </div>
                        <div className = "row">
                            <label> Valor em promoção: </label>
                            <div> { this.state.employee.promocao }</div>
                        </div>
                    </div>
                    <div class="container text-center" style={{padding:'20px'}}>
                        <button className="btn btn-info" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Voltar</button>
                        </div>
                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent