const log = console.log;


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