function add(...args) {
  let sum = 0;
  for (let num of args) {
    sum += num;
  }
  return parseInt(sum);
}

function subtract(...args) {
  let diff = args[0];
  console.log(diff);
  for (let num of args.slice(1)) {
    console.log(num);
    diff -= num;
  }
  return parseInt(diff);
}

function multiply(...args) {
    let prod = args[0]
    for (let num of args.slice(1)) {
        prod *= num
    }
    return parseInt(prod)
}

function divide(...args) {
    let div = args[0]
    for (let num of args.slice(1)){
        div /= num
    }
    return parseInt(div)
}
