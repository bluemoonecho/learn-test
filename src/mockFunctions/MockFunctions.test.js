

// const addition = (x,y) =>{
//   return x + y
// }


// const total = (x, y) =>{
//   let str=''
//   str+= `$${x}${y}`
//   return str
// }




test('add', () => { 
  const addition = jest.fn(() => 3)
  expect(addition(1,2)).toBe(3);
  expect(addition(1,2)).toBe(3);
  expect(addition).toHaveBeenCalledTimes(2) 
  expect(addition).toHaveBeenCalledWith(1,2)
  // expect(addition(5,2)).toBe(7)

})

  

// test('total', () => {
//   expect(total(2,5)).toBe('$25')

// })














//// Documentation Tests


function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }

test('mock functions', () => {

    const mockCallback = jest.fn(x => 42 + x);

    forEach([0, 1], mockCallback);

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);

  })

   

test('this', () => {
  const myMock = jest.fn();
  const a = new myMock();
  const b = {};
  const bound = myMock.bind(b); 
  bound();

  console.log(myMock.mock.instances);
  // > [ <a>, <b> ]
})

test('some mock function', () => {

  const someMockFunction = jest.fn(()=> 'return value')

    someMockFunction('first arg', 'second arg')
  // The function was called exactly once
  expect(someMockFunction.mock.calls.length).toBe(1);

  // The first arg of the first call to the function was 'first arg'
  expect(someMockFunction.mock.calls[0][0]).toBe('first arg');

  // The second arg of the first call to the function was 'second arg'
  expect(someMockFunction.mock.calls[0][1]).toBe('second arg');

  // The return value of the first call to the function was 'return value'
  expect(someMockFunction.mock.results[0].value).toBe('return value');


  const SomeMockConstructor = jest.fn();
  const a = new SomeMockConstructor();
  a.name ='test'
  const b =  new SomeMockConstructor();
  // This function was instantiated exactly twice
  expect(SomeMockConstructor.mock.instances.length).toBe(2);

  // The object returned by the first instantiation of this function
  // had a `name` property whose value was set to 'test'
  expect(SomeMockConstructor.mock.instances[0].name).toEqual('test');
  }) 


test('mockReturnValueOnce', ()=>{
  const myMock = jest.fn();
  console.log(myMock());
  // > undefined
 
  myMock
  .mockReturnValueOnce(10)
  .mockReturnValueOnce('x')
  .mockReturnValue(true);

  console.log('mockReturnValueOnce =>>>>>>>' , myMock(), myMock(), myMock(), myMock());
})

  // > 10, 'x', true, true

test('filter tests', () => {
    const filterTestFn = jest.fn();

  // Make the mock return `true` for the first call,
  // and `false` for the second call
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

  const result = [11, 12].filter(num => filterTestFn(num));

  console.log(result);
  // > [11]
  console.log(filterTestFn.mock.calls[0][0]); // 11
  console.log(filterTestFn.mock.calls[1][0]); // 12
})


