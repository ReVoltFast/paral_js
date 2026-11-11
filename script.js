function runDemo() {
  console.clear();
  console.log("Привет, мир!");

  // Таймеры относятся к макрозадачам (задачам очереди task).
  setTimeout(() => { console.log("setTimeout 1"); }, 0);
  setTimeout(() => { console.log("setTimeout 2"); }, 0);

  // Обработчики .then() ставятся в очередь микрозадач.
  new Promise((resolve) => resolve("Promise 1 resolved"))
    .then((result) => console.log(result));

  new Promise((resolve) => resolve("Promise 2 resolved"))
    .then((result) => console.log(result));

  (function () {
    console.log("this is the start");

    setTimeout(function callback() {
      console.log("this is a msg from call back");
    }, 0);

    console.log("this is just a message");

    setTimeout(function callback1() {
      console.log("this is a msg from call back1");
    }, 0);

    console.log("this is the end");
  })();

  // Расчёт количества итераций для точки на комплексной плоскости.
  function mandelbrot(x, y) {
    const scale = 120;
    const Cr = (x - 256) / scale + 0.407476;
    const Ci = (y - 256) / scale + 0.234204;
    let I = 0, R = 0, I2 = 0, R2 = 0;
    let n = 0;

    while ((R2 + I2 < 2.0) && (n < 512)) {
      I = (R + R) * I + Ci;
      R = R2 - I2 + Cr;
      R2 = R * R;
      I2 = I * I;
      n++;
    }
    return n;
  }

  // Формирование массива накопленных сумм.
  function sums(values) {
    const result = [];
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
      sum += values[i];
      result[i] = sum;
    }
    return result;
  }

  const testArray = [1, 2, 3, 4, 5];
  console.log(mandelbrot(300, 200)); // 2
  console.log(mandelbrot(100, 350)); // 3
  console.log(mandelbrot(256, 256)); // 171
  console.log(sums(testArray));      // [1, 3, 6, 10, 15]
  document.getElementById("status").textContent =
    "Выполнение завершено. Результаты смотрите в Console браузера.";
}

document.getElementById("runButton").addEventListener("click", runDemo);
runDemo();
