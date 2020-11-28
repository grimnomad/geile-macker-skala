import { createObject } from './createObject';

describe('createObject', () => {
  test('should create an actual object', () => {
    const person = createObject({ name: 'Mustermann' });

    expect(person).toBeDefined();
  });

  test('should have right property values', () => {
    const person = createObject({ name: 'Mustermann', firstName: 'Max' });

    expect(person.name).toStrictEqual('Mustermann');
    expect(person.firstName).toStrictEqual('Max');
  });

  test('should have frozen properties', () => {
    const person = createObject({ name: 'Mustermann', firstName: 'Max' });

    expect(Object.isFrozen(person)).toBe(true);
  });
});
