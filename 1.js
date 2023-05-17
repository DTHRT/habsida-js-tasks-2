// * 1. Напишите функцию, которая принимает массив из нескольких типов данных и будет выводить возвращать новый массив, который будет состоять только из строк, содержащих больше 5 символов.

function returnStrWithMore5Symbols(arr) {
  const newArr = [];
  for (const el of arr) {
    if (typeof el === 'string' && el.length > 5) {
      newArr.push(el);
    }
  }

  return newArr;
}

const ex1 = ['Привет', 'Ухты', 33, [], true, 'Хорош', 'FJFJFJFJ'];

console.log(returnStrWithMore5Symbols(ex1));
