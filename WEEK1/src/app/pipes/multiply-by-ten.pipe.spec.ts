import { MultiplyByTenPipe } from './multiply-by-ten.pipe';

describe('MultiplyByTenPipe', () => {
  it('create an instance', () => {
    const pipe = new MultiplyByTenPipe();
    expect(pipe).toBeTruthy();
  });
});
