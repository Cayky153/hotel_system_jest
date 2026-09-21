const Reserva = require("./Reserva.js");
class Hotel {
    #nome
    #quartos
    #reservas
    constructor(nome, quartos, reservas) {
        this.#nome = nome;
        this.#quartos = quartos;
        this.#reservas = reservas;
    }


    listarReservas() {
        const reservas = this.getReservas();
        return reservas;
    }
    fazerReserva(reserva) {
        if (!(reserva instanceof Reserva)) {
            throw new Error("Reserva deve ser um objeto do tipo Reserva");
        }
        else {
            for (let i = 0; i < reserva.getQuartos().length; i++) {
                let quarto = reserva.getQuartos()[i];
                if (quarto.reservado) {
                    throw new Error(`Quarto ${quarto.numero} já está reservado`);
                }
            }
            this.#reservas.push(reserva);
        }
    }

    removerReserva(index) {
        if (index >= 0 && index < this.#reservas.length)
            this.#reservas.splice(index, 1);
        else
            throw new Error("Reserva não encontrada");
    }
    getNome() {
        return this.#nome;
    }
    setNome(nome) {
        this.#nome = nome;
    }
    getQuartos() {
        return this.#quartos;
    }
    setQuartos(quartos) {
        this.#quartos = quartos;
    }
    getReservas() {
        return this.#reservas;
    }
    setReservas(reservas) {
        this.#reservas = reservas;
    }
}
module.exports = Hotel;