for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 3; i++) {
  console.log(`Outer loop ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(j);
  }
}
