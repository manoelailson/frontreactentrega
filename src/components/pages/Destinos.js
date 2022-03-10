import banner from '../img/banner.jpg';
import img1 from '../img/paisagem1.png'
import img2 from '../img/paisagem2.jpg'
import img3 from '../img/paisagem3.jpg'
import img4 from '../img/paisagem4.jpg'

function Destinos(){
    return(
        <div class="container body-content ">
            <div class="text-center" style={{padding:'60px 0px 20px'}}>
                    <h1>Lugares incríveis</h1>
            </div>
            <div class="card text-center" style={{padding:'100px'}}>
               
                <div class="card-body" >
                    <h2 class="card-title">Dubai</h2>
                    <img src={banner} class="card-img-top" alt="..." />
                    <h3 class="card-text">Você quer cria memorias incríveis so clique</h3>
                    <a href="#" class="btn btn-primary">Aqui</a>
                </div>
            </div>

            <div class="row row-cols-1 row-cols-md-2 g-4" style={{padding:'100px 0px 20px'}}>
                <div class="col">
                    <div class="card text-center">
                        <img src={img1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Chile</h5>
                            <p class="card-text">Pacotes a partir de R$2000,00</p>
                            <a href="#" class="btn btn-primary">Viajar</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card text-center">
                        <img src={img2} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">França</h5>
                            <p class="card-text">Pacotes a partir de R$18000,00</p>
                            <a href="#" class="btn btn-primary">Viajar</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card text-center">
                        <img src={img3} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Noruega</h5>
                            <p class="card-text">Pacotes a partir de R$28000,00</p>
                            <a href="#" class="btn btn-primary">Viajar</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card text-center">
                        <img src={img4} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Japão</h5>
                            <p class="card-text">Pacotes a partir de R$20000,00</p>
                            <a href="#" class="btn btn-primary">Viajar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destinos