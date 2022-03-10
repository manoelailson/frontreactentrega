import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            lugares: '',
            valores: '',
            promocao: ''
        }
        this.changeLugaresHandler = this.changeLugaresHandler.bind(this);
        this.changeValoresHandler = this.changeValoresHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({lugares: employee.lugares,
                    valores: employee.valores,
                    promocao : employee.promocao
                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {lugares: this.state.lugares, valores: this.state.valores, promocao: this.state.promocao};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/employees');
            });
        }
    }
    
    changeLugaresHandler= (event) => {
        this.setState({lugares: event.target.value});
    }

    changeValoresHandler= (event) => {
        this.setState({valores: event.target.value});
    }

    changePromocaoHandler= (event) => {
        this.setState({promocao: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Adicionar promoção</h3>
        }else{
            return <h3 className="text-center">Atualizar promoção</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Paises ou cidades: </label>
                                            <input placeholder="Paises ou cidades" name="lugares" className="form-control" 
                                                value={this.state.lugares} onChange={this.changeLugaresHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Valor normal: </label>
                                            <input placeholder="Valor normal" name="valores" className="form-control" 
                                                value={this.state.valores} onChange={this.changeValoresHandler}/>
                                        </div>
                                        <div className = "form-group" style={{padding: "0px 0px 100px"}}>
                                            <label> Valor com promoção: </label>
                                            <input placeholder="Valor com promoção" name="promocao" className="form-control" 
                                                value={this.state.promocao} onChange={this.changePromocaoHandler}/>
                                        </div>
                                        <div class="container text-center">
                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Salvar</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent