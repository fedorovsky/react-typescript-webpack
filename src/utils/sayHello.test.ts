import sayHello from './sayHello';

describe('sayHello', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  it('test', () => {
    expect(sayHello('Hello')).toEqual('Hello');
  });
});
