import esBisiesto from "./esBisiesto.js";

describe("Es Bisiesto", () => {
  it("Los anios divisibles por 400 son anios bisiestos", () => {
    expect(esBisiesto(2000)).toEqual(true);
    expect(esBisiesto(2400)).toEqual(true);
  });

  it("Los anios divisibles por 100 pero no por 400 no son anios bisiestos", () => {
    expect(esBisiesto(1700)).toEqual(false);
    expect(esBisiesto(1800)).toEqual(false);
    expect(esBisiesto(1900)).toEqual(false);
    expect(esBisiesto(2100)).toEqual(false);
  });

  it("Los anios divisibles por 4 pero no por 100 son anios bisiestos", () => {
    expect(esBisiesto(2008)).toEqual(true);
    expect(esBisiesto(2012)).toEqual(true);
    expect(esBisiesto(2016)).toEqual(true);
  });

  it("Los anioos no divisibles por 4 no son anios bisiestos", () => {
    expect(esBisiesto(2017)).toEqual(false);
    expect(esBisiesto(2018)).toEqual(false);
    expect(esBisiesto(2019)).toEqual(false);
  });
});
