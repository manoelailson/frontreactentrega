import img1 from '../img/paisagem1.png'
import img2 from '../img/paisagem2.jpg'
import img3 from '../img/paisagem3.jpg'
import img4 from '../img/paisagem4.jpg'


function Home(){
    var nome
    return(
        <div class="container body-content">
            
            <div class="jumbotron" style={{padding:'100px'}}>
                <h1>PomboCorreio</h1>
                <p class="lead">PomboCorreio é a empresa que preza pela segurança  e conforto do cliente fazendo dois voos por ano.</p>
        
            </div>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card text-center">
                    <img src={img1} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Chile</h5>
                        
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card text-center">
                    <img src={img2} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">França</h5>
                            
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card text-center">
                    <img src={img3}class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Noruega</h5>
                            
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card text-center">
                        <img src={img4}class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Japão</h5>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Home