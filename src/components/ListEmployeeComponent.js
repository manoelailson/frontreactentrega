import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'
import img1 from '../components/img/paisagem1.png'
import img2 from '../components/img/paisagem2.jpg'
import img3 from '../components/img/paisagem3.jpg'
import img4 from '../components/img/paisagem4.jpg'
class ListEmployeeComponent extends Component {
 
constructor(props) {
super(props)

 this.state = {
employees: []
}
this.addEmployee = this.addEmployee.bind(this);
this.editEmployee = this.editEmployee.bind(this);
this.deleteEmployee = this.deleteEmployee.bind(this);
}

 deleteEmployee(id){
EmployeeService.deleteEmployee(id).then( res => {
this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
});
}
viewEmployee(id){
this.props.history.push(`/view-employee/${id}`);
}
editEmployee(id){
this.props.history.push(`/add-employee/${id}`);
}

 componentDidMount(){
EmployeeService.getEmployees().then((res) => {
this.setState({ employees: res.data});
});
}

 addEmployee(){
this.props.history.push('/add-employee/_add');
}

 render() {
return (
<div>
    
    <br></br>
    <div style={{padding: "50px"}} className = "container body-content">
        <h1 >VOOS COM DESCONTO</h1>
        <div style={{padding: "100px"}}>
        <div id="carouselExampleControls" class="carousel slide"
					data-bs-ride="carousel">
					<div class="carousel-inner">
						<div class="carousel-item active">
							<div class="row row-cols-1 row-cols-md-2 g-4">
								<div class="col">
									<div class="card">
										<img src={img1} class="card-img-top" alt="..." />
										<div class="card-body">
											<h5 class="card-title">Brasil</h5>
											<p class="card-text">
												De <strike>$780</strike> por apenas $320
											</p>
										</div>
									</div>
								</div>
								<div class="col">
									<div class="card">
										<img src={img2}class="card-img-top" alt="..." />
										<div class="card-body">
											<h5 class="card-title">Nova zelandia</h5>
											<p class="card-text">
												De<strike> $780</strike> por aepnas $320
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="carousel-item">
							<div class="row row-cols-1 row-cols-md-2 g-4">
								<div class="col">
									<div class="card">
										<img src={img3} class="card-img-top" alt="..." />
										<div class="card-body">
											<h5 class="card-title">Guatemala</h5>
											<p class="card-text">
												De <strike>$780</strike> por apenas $320
											</p>
										</div>
									</div>
								</div>
								<div class="col">
									<div class="card">
										<img src={img4}class="card-img-top" alt="..." />
										<div class="card-body">
											<h5 class="card-title">China</h5>
											<p class="card-text">
												De <strike>$780</strike> por apenas $320
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="carousel-item">
							<div class="row row-cols-1 row-cols-md-2 g-4">
								<div class="col">
									<div class="card">
										<img src={img1}class="card-img-top" alt="..." />
										<div class="card-body">
											<h5 class="card-title">Finalandia</h5>
											<p class="card-text">
												De <strike>$780</strike> por apenas $320
											</p>
										</div>
									</div>
								</div>
								<div class="col">
									<div class="card">
										<img src={img2}class="card-img-top" alt="..." />
										<div class="card-body">
											<h5 class="card-title">Brasil</h5>
											<p class="card-text">
												De <strike>$780</strike> por apenas $320
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<button class="carousel-control-prev" type="button"
						data-bs-target="#carouselExampleControls" data-bs-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button class="carousel-control-next" type="button"
						data-bs-target="#carouselExampleControls" data-bs-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
				</div>
                <h2 className="text-center" style={{padding:'50px'}}>Novas promoções</h2>
                <div class="container text-center">
            <button type="button" className="btn btn-primary" onClick={this.addEmployee}> Adicionar</button>
        </div>
            <div id="carouselExampleControls" style={{padding:'20px'}} class="carousel slide"
                data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row row-cols-1 row-cols-md-2 g-4">

                            {this.state.employees.map(employee =>
                                <div class="col">
                                    <div class="card">
                                        <img src={img1} class="card-img-top" alt="..." />
                                        <div class="card-body ">
                                            <tr key = {employee.id}>
                                                <h5 class="card-title">{ employee.lugares}</h5>
                                
                                                <p class="card-text ">
                                                De <strike>$ {employee.valores}</strike> por apenas ${employee.promocao}</p>
                                                <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info ">Atualizar</button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Deletar </button>
                                                <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">Info </button>

                                            </tr>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}
}

export default ListEmployeeComponent