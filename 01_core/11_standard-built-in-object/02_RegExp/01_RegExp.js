

// 정규 표현식 생성
const target = 'JavaScript' // 검색 대상

// 정규표현식
// 정규표현식 리터럴 : /패턴/플래그 
let regexp = /j/i; // 패턴 : j , 플래그 : i => 대소문자 구분 없이

// RegExp 생성자 함수 : new RegExp(패턴, 플래그)
regexp = new RegExp('j','i')
regexp = new RegExp(/j/,'i')
regexp = new RegExp(/j/i)

// test 메서드
// - target 문자열에 대해 정규 표현식 regexp의 패턴을 검색하여 매칭 결과를 Boolean으로 반환
console.log(regexp.test(target));