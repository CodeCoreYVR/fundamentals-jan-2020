function func() {
  if (true) {
    const a = 123;
    let b = 456;
    console.log('within if block:', a, b);
}
  console.log('within function scope:', a, b);
}

func() // 'within if block:' 123 456
// a and b are not defined

function func2() {
  if (true) {
    var j = 123;
    var k = 456;
    console.log('within if block:', j, k);
  }
  console.log('within function:', j, k);
}

func2() 
// 'within if block:' 123 456
// 'within function:' 123 456
