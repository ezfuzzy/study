package com.example.kotlin_study

class MyPerson {
    constructor()
    constructor(name:String)
    constructor(name:String, age:Int)
}

class YourPerson{
    constructor(name:String="", age:Int=0)
}

class YourPerson2 {
    @JvmOverloads constructor(name:String="", age:Int=0)
}

class OurPerson (var name:String="", age:Int=0)
// jvm 어노테이션이 있으면 constructor 예약어 생략 불가
class OurPerson2 @JvmOverloads constructor(var name:String="",var age:Int=0)

fun main() {
    MyPerson()
    MyPerson("ezfz")
    MyPerson("ezfz", 26)

    YourPerson()
    YourPerson("ezfza")
    YourPerson("ezfza", 27)

    OurPerson()
    OurPerson("ezfzb")
    OurPerson("ezfzb", 28)

    OurPerson2()
    OurPerson2("ezfzc")
    OurPerson2("ezfzc", 29)


}