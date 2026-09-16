class Reserva {
    #pessoas
    #quartos
    constructor(pessoas,quartos){
        this.#pessoas = pessoas;
        this.#quartos = quartos;
    }


    getPessoas(){
        return this.#pessoas;
    }
    setPessoas(pessoas){
        this.#pessoas = pessoas;
    }
    getQuartos(){
        return this.#quartos;
    }
    setQuartos(quartos){
        this.#quartos = quartos;
    }
}

module.exports = Reserva;