describe('matcher', () => {
  test('primitive', () => {
    // number
    expect(1).toBe(1);
    // string
    expect('1').toBe('1');
  });

  test('Boolean', () => {
    expect(true).toBe(true);
    expect(true).toBeTruthy();
    expect(1).toBeTruthy();
    expect('1').toBeTruthy();

    expect(false).toBe(false);
    expect(false).toBeFalsy();
    expect(0).toBeFalsy();
    expect('').toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
  });
});
