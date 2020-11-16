function selectionSort(givenArray) {
  for (let i = 0; i < givenArray.length; i++) {
    console.log(i);
    let minimum = i;
    for (let j = i + 1; j < givenArray.length; j++) {
      if (givenArray[j] < givenArray[minimum]) {
        console.log({ minimum });
        console.log({ j });
        minimum = j;
      }
    }
    if (i !== minimum) {
      [givenArray[minimum], givenArray[i]] = [
        givenArray[i],
        givenArray[minimum],
      ];
    }
  }
  console.log(givenArray);
}

selectionSort([4, 1, 3, 2, 5]);
