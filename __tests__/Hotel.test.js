const Hotel = require("../Hotel");
const Reserva = require("../Reserva");


const listaPessoas = [{nome: "Cayky", documento: 20}, 
                {nome: "João", documento: 30}];
const listaQuartos = [{numero: 1, categoria: "Simples", valor: 100,reservado:false},
                      {numero: 2, categoria: "Duplo", valor: 200,reservado:false}];

const hotel = new Hotel("Hotel Teste", [], []);
const reserva = new Reserva(listaPessoas, listaQuartos);

test("removerReservaSucess",() =>{
    hotel.fazerReserva(reserva);
    hotel.removerReserva(0);
    expect(hotel.getReservas()).toEqual([]);
})
test("removerReservaFailure",() => {
    expect(() => hotel.removerReserva(0)).toThrow("Reserva não encontrada");
})
test("fazerReservaSucess", () => {
    hotel.fazerReserva(reserva);
    expect(hotel.getReservas()).toEqual([reserva]);
});
test("fazerReservaInvalida", () => {
    expect(() => hotel.fazerReserva("not a reservation")).toThrow("Reserva deve ser um objeto do tipo Reserva");
});

test("fazerReservaQuartoJaReservado", () => {
    const reserva2 = new Reserva(listaPessoas, [{numero: 1, categoria: "Simples", valor: 100,reservado:true}]);
    expect(() => hotel.fazerReserva(reserva2)).toThrow("Quarto 1 já está reservado");
});
test("listarReservas",()=>{
    const hotel2 = hotel.getReservas();
    expect(hotel.listarReservas()).toEqual(hotel2);
})