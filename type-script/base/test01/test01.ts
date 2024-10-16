/* 
  실시간 컴파일
  tsc -w 
*/
;(function () {
  let num0: number = 1

  let myName: string = "ezfz"
  let isMan: boolean = true

  console.log(`num: ${num0} myName: ${myName} isMan: ${isMan}`)
})()


/* 
  object 타입은 기본 data type을 제외한 모든 type을 담을 수 있음
  number, string, boolean, null, undefined 등 
*/

;(function () {
  let mem: object

  mem = {
    num: 1,
    name: "ezfz",
    addr: "gn",
  }

  let arr: object

  arr = []

  let action: object
  action = function () {}

  
})()

