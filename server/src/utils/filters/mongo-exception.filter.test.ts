import { MongoExceptionFilter } from './mongo-exception.filter';

describe('MongoExceptionFilter', () => {
  const jsonMock = {
    json: jest.fn().mockImplementation(() => ({
      status_code: 409,
      message: 'test'
    }))
  };

  const responseMock = {
    status: jest.fn().mockImplementation(() => jsonMock)
  };

  const httpArgumentsHostMock = {
    getResponse: jest.fn().mockImplementation(() => responseMock)
  };

  const argumentsHostMock = {
    getArgs: jest.fn(),
    getArgByIndex: jest.fn(),
    switchToRpc: jest.fn(),
    switchToHttp: jest.fn().mockImplementation(() => httpArgumentsHostMock),
    switchToWs: jest.fn(),
    getType: jest.fn()
  };

  test('should return with the given message and a status_code of 409', () => {
    const filter = new MongoExceptionFilter({ '11000': 'test' });

    const error = {
      code: 11000,
      errorLabels: [],
      hasErrorLabel: () => false,
      message: '',
      name: ''
    };

    filter.catch(error, argumentsHostMock);

    expect(argumentsHostMock.switchToHttp).toBeCalled();
    expect(httpArgumentsHostMock.getResponse).toBeCalled();
    expect(responseMock.status).toBeCalled();
    expect(jsonMock.json).toBeCalled();
    expect(jsonMock.json).toReturnWith({
      status_code: 409,
      message: 'test'
    });
  });
});
