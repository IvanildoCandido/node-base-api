import { Math } from "./Math";

describe('Testando a biblioteca "Math"', () => {
  it('Verifica se a função "sum" soma dois numeros corretamente', () => {
    const result = Math.sum(5, 10);
    expect(result).toBe(15);
  });
});
