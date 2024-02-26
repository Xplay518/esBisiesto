import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("El 4 deberia considerarse como un anio bisiesto", () => {
    const result = esBisiesto(4);
    expect(result).toEqual(true);
    //expect(sumar(3, 2)).toEqual(5);
  });
});

