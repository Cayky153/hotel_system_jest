class Quarto {
    #numero
    #hotel
    #reservado

    constructor(numero, hotel) {
        this.#numero = numero;
        this.#hotel = hotel;
        this.#reservado = false;
    }

    get reservado() {
        return this.#reservado;
    }

    set reservado(status) {
        this.#reservado = status;
    }

    get numero() {
        return this.#numero;
    }

    set numero(numero) {
        this.#numero = numero;
    }

    getHotel() {
        return this.#hotel;
    }

    setHotel(hotel) {
        this.#hotel = hotel;
    }
}

module.exports = Quarto;