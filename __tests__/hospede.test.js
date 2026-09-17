const Hospede = require("../hospede.js");

describe("Classe Hospede", () => {
    test("Deve criar um hospede apenas com o nome (valores padrão para quarto e pagador)", () => {
        const hospede = new Hospede("João da Silva");

        expect(hospede.getNome()).toBe("João da Silva");
        expect(hospede.getQuarto()).toBeNull();
        expect(hospede.getPagador()).toBe(false);
    });

    test("Deve criar um hospede completo (com quarto e sendo o pagador)", () => {
        const mockQuarto = { numero: 301 }; 
        const hospede = new Hospede("Maria Oliveira", mockQuarto, true);

        expect(hospede.getNome()).toBe("Maria Oliveira");
        expect(hospede.getQuarto()).toEqual(mockQuarto);
        expect(hospede.getPagador()).toBe(true);
    });

    test("Deve alterar as propriedades do hospede usando os setters", () => {
        const hospede = new Hospede("Carlos");
        const mockQuarto = { numero: 405 };

        hospede.setNome("Carlos Silva");
        hospede.setQuarto(mockQuarto);
        hospede.setPagador(true);

        expect(hospede.getNome()).toBe("Carlos Silva");
        expect(hospede.getQuarto()).toEqual(mockQuarto);
        expect(hospede.getPagador()).toBe(true);
    });
});