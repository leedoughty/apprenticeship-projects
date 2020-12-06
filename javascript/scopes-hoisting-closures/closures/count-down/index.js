function countDown1() {
  for (let i = 3; i >= 0; i--) {
    setTimeout(function () {
      console.log(i || "Lift-off!");
    }, (3 - i) * 1000);
  }
}

countDown1();

function countDown2(time) {
  if (time === 0) {
    console.log("lift off");
  } else {
    console.log(time);
  }
  if (time >= 1) {
    countDown2(time - 1);
  }
}

countDown2(3);

function countDown3(time) {
  console.log(time || "lift-off");

  if (time != 0) {
    setTimeout(() => countDown3(time - 1), 1000);
  }
}

countDown3(3);
