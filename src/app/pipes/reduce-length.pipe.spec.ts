import { ReduceLengthPipe } from './reduce-length.pipe';

describe('ReduceLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new ReduceLengthPipe();
    expect(pipe).toBeTruthy();
  });
});
