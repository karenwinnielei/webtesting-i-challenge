const enhancer = require('./enhancer.js');
// test away!
describe('repair', () => {
  it('should return a new item with durability restored to 100', () => {
    let item = {
      name: 'item1',
      enhancement: 20,
      durability: 3,
    };
    expect(enhancer.repair(item)).toMatchObject({
      durability: 100,
    });
  });
});

describe('success', () => {
  it('should increase enhancement by 1 if enhancement <20, otherwise enhancement should stay the same', () => {
    let item = {
      name: 'item1',
      enhancement: 20,
      durability: 3,
    };
    expect(enhancer.success(item)).toMatchObject({
      enhancement: 20,
    });
  });
});

describe('fail', () => {
  it('should decrease durability by 5 if enhancement <15', () => {
    let item = {
      name: 'item1',
      enhancement: 12,
      durability: 100,
    };
    expect(enhancer.fail(item)).toMatchObject({
      enhancement: 12,
      durability: 95,
    });
  });

  it('should decrease durability by 10 if enhancement >15', () => {
    let item = {
      name: 'item1',
      enhancement: 15,
      durability: 100,
    };
    expect(enhancer.fail(item)).toMatchObject({
      enhancement: 15,
      durability: 90,
    });
  });

  it('should decrease durability by 10 if enhancement >15, and decrease enhancement by 1 if enhancement > 16', () => {
    let item = {
      name: 'item1',
      enhancement: 16,
      durability: 100,
    };
    expect(enhancer.fail(item)).toMatchObject({
      enhancement: 15,
      durability: 90,
    });
  });
});
