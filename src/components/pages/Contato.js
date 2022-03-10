function Contato(){
    return(
        <div class="container body-content">
            <form _ngcontent-acm-c68="" novalidate="" class="ng-untouched ng-pristine ng-valid"  style={{padding:'100px'}}>
                <div _ngcontent-acm-c68="" class="row gx-5">
                    <div _ngcontent-acm-c68="" class="mb-4 col-md-6">
                        <label _ngcontent-acm-c68="" for="inputName" class="mb-2 text-dark">nome completo</label>
                        <input _ngcontent-acm-c68="" id="inputName" type="text" placeholder="Nome completo" class="form-control py-4" />
                    </div>
                    <div _ngcontent-acm-c68="" class="mb-4 col-md-6">
                        <label _ngcontent-acm-c68="" for="inputEmail" class="mb-2 text-dark">Email</label>
                        <input _ngcontent-acm-c68="" id="inputEmail" type="email" placeholder="nome@exemplo.com" class="form-control py-4" />
                    </div>
                </div>
                <div _ngcontent-acm-c68="" class="mb-4">
                    <label _ngcontent-acm-c68="" for="inputMessage" class="mb-2 text-dark">Mensagem</label>
                    <textarea _ngcontent-acm-c68="" id="inputMessage" type="text" placeholder="Sua mensagem." rows="4" class="form-control py-3"></textarea>
                </div>
                <div _ngcontent-acm-c68="" class="text-center">
                    <button _ngcontent-acm-c68="" type="submit" class="btn btn-primary fw-500 mt-4">Enviar</button>
                </div>
            </form>
            <address align="center"  style={{padding:'100px'}}>
            PomboCorreio<br />
                Rua dos pombos, numero 2253655<br />
                <abbr >Telefone:</abbr>
                8888-8888
            </address>

            <address align="center">
                <strong>Suporte:</strong>   <a href="#">PomboCorreioSuporte@Gmail.com</a><br />
                <strong>Contato:</strong> <a href="#">PomboCorreioTrabalheAqui@Gmail.com</a>
            </address>
        </div>
    )
}

export default Contato