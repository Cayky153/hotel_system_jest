const Quarto = require("../quarto.js");
describe("Classe Quarto", () => {
    test("Deve criar um quarto com número e hotel, iniciando como não reservado", () => {
        const mockHotel = { nome: "Hotel Teste" };
        const quarto = new Quarto(101, mockHotel);

        expect(quarto.numero).toBe(101);
        expect(quarto.getHotel()).toEqual(mockHotel);
        expect(quarto.reservado).toBe(false);
    });

    test("Deve alterar o status de reservado usando o setter", () => {
        const quarto = new Quarto(102, {});
        
        quarto.reservado = true;
        
        expect(quarto.reservado).toBe(true);
    });

    test("Deve atualizar o número e o hotel corretamente", () => {
        const quarto = new Quarto(103, {});
        const novoHotelMock = { nome: "Hotel Luxo" };

        quarto.numero = 205;
        quarto.setHotel(novoHotelMock);

        expect(quarto.numero).toBe(205);
        expect(quarto.getHotel()).toEqual(novoHotelMock);
    });
});