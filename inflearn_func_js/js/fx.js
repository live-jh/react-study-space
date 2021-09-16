const log = console.log;

const curry = f =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

// reduce (합치기), a는 0, f는 함수, reduce엔 앞에 연산, 뒤에 함수를 넣는다
const go = (...args) => reduce((a, f) => f(a), args); // (f(a)[연산], args[iter])

// 내부에 전달받은 여러 함수를 이용해 결과값(함수)을 축약, 함수 리턴
// as 인자를 받아 go 함수를 호출하는데 인자 받은 함수를 그대로 넘겨준다
// as 인자는 pipe의 첫번째 인자이다
const pipe = (f, ...funcs) => (...as) => {
      log(...as) // func의 파라미터
      log(f) // pipe의 첫번째 인자
      log(funcs) // pipe의 2,3번째 인자
      return go(f(...as), ...funcs)
};


const take = curry((l, iter) => {
  let res = [];
  iter = iter[Symbol.iterator]();
  let cur;
  while (!(cur = iter.next()).done) {
    const a = cur.value;
    res.push(a);
    if (res.length == l) return res;
  }
  return res;
});

const L = {};

L.filter = curry(function* (f, iter) {
    for (const a of iter) {
      if (f(a)) yield a;
    }
  });
  

// custom map
const map = (f, iter) => { //f -> 함수를 받아 함수내에서 조건 처리
    let res = []
    for (const it of iter) { // iterator이며 곧 => iter[Symbol.iterator]()
        res.push(f(it)); // 함수에게 값을 위임
    }
    return res;
}

// 중복 제거 또는 조건 걸기
const filter = (f, iter) => {
    let res = []
    for (const it of iter) {
        if (f(it)) res.push(it);
    }
    return res;
}

// 조건의 합
const reduce = (f, acc, iter) => {
    if (!iter) {
        iter = acc[Symbol.iterator](); //인자로 보낸 acc에 iterator로 할당
        acc = iter.next().value;       //iterator의 첫번째 요소를 acc로 할당
    }
    for (const it of iter) {
        acc = f(acc, it); // func 안에 2개 인자 보내기 (add)
    }
    return acc; //acc 누적값
}

// 더하기
const add = (a, b) => a + b;

// 찾기
const find = curry((f, iter) => go(
    iter,
    L.filter(f),
    take(1),
    ([a]) => a));


    // go, pipe, take, takeAll, L (Lazy), flatMap, flatten, range