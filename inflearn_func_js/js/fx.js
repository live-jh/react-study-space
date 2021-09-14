const log = console.log;

const curry = f =>
  (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const go = (...args) => reduce((a, f) => f(a), args);

const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

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