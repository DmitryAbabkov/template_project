import getRandomInt from '../../index';

test('Генерация числа от 0 до 16', () => {
  const randomNumber = getRandomInt(); // Генерация случайного числа
  expect(randomNumber).toBeGreaterThanOrEqual(0); // Проверка, что число больше или равно 0
  expect(randomNumber).toBeLessThanOrEqual(16); // Проверка, что число меньше или равно 16
});

