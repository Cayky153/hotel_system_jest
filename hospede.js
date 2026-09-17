class Hospede {
    #nome
    #quarto
    #pagador

    constructor(nome, quarto = null, pagador = false) {
        this.#nome = nome;
        this.#quarto = quarto;
        this.#pagador = pagador;
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getQuarto() {
        return this.#quarto;
    }

    setQuarto(quarto) {
        this.#quarto = quarto;
    }

    getPagador() {
        return this.#pagador;
    }

    setPagador(pagador) {
        this.#pagador = pagador;
    }
}

module.exports = Hospede;