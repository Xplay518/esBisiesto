import esBisiesto from "./esBisiesto.js";

/*
describe("Es Bisiesto", () => {
  it("El 4 deberia considerarse como un anio bisiesto", () => {
    expect(esBisiesto(4)).toEqual(true);    //act assert
  });

  it("El 5 no deberia considerarse como un anio bisiesto", () => {
    
    expect(esBisiesto(5)).toEqual(false);
    
  });
});
  */



describe("Es Bisiesto", () => {
  it("Los años divisibles por 400 deberían considerarse como años bisiestos", () => {
    expect(esBisiesto(2000)).toEqual(true);
    expect(esBisiesto(2400)).toEqual(true);
  });

  it("Los años no divisibles por 400 no deberían considerarse como años bisiestos", () => {
    expect(esBisiesto(2001)).toEqual(false);
    expect(esBisiesto(2100)).toEqual(false);
  });
});



