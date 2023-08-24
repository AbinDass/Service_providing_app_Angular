import { ReduceLengthPipe } from './reduce-length.pipe';

describe('ReduceLengthPipe', () => {
  let pipe: ReduceLengthPipe;

  beforeEach(() => {
    pipe = new ReduceLengthPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should reduce the length of a string and add ellipsis', () => {
    const input = 'This is a long text that needs to be reduced';
    const transformedValue = pipe.transform(input);
    expect(transformedValue).toEqual('This is a ...');
  });

  it('should handle empty input', () => {
    const input = '';
    const transformedValue = pipe.transform(input);
    expect(transformedValue).toEqual('...');
  });

  it('should handle input shorter than 10 characters', () => {
    const input = 'Short';
    const transformedValue = pipe.transform(input);
    expect(transformedValue).toEqual('Short...');
  });
});
