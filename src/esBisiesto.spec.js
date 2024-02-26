import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("Los años divisibles por 400 son años bisiestos", () => {
    expect(esBisiesto(2000)).toEqual(true);
    expect(esBisiesto(2400)).toEqual(true);
  });

  it("Los años divisibles por 100 pero no por 400 no son años bisiestos", () => {
    expect(esBisiesto(1700)).toEqual(false);
    expect(esBisiesto(1800)).toEqual(false);
    expect(esBisiesto(1900)).toEqual(false);
    expect(esBisiesto(2100)).toEqual(false);
  });

  it("Los años divisibles por 4 pero no por 100 son años bisiestos", () => {
    expect(esBisiesto(2004)).toEqual(true);
    expect(esBisiesto(2008)).toEqual(true);
    expect(esBisiesto(2012)).toEqual(true);
  });

  it("Los años no divisibles por 4 no son años bisiestos", () => {
    expect(esBisiesto(2001)).toEqual(false);
    expect(esBisiesto(2003)).toEqual(false);
    expect(esBisiesto(2017)).toEqual(false);
  });
});
