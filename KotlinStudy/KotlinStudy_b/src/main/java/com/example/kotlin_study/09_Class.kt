package com.example.kotlin_study

import com.example.kotlin_study.mypac.Car
import com.example.kotlin_study.mypac.Member
import com.example.kotlin_study.mypac.Member2

class MyCar

class YourCar {
    fun drive() {
        println("drive ~")
    }
}

class Ship constructor(){
    // init 블럭은 대표 생성자의 일부

    init {
        // 객체를 생성하는 시점에 초기화 하고싶은 작업이 있으면 여기서 진행

        println("Ship primary 생성자 호출됨")
    }
}
class Ship2 { // > Ship2() < 인자가 없으면 Ship2 가능
    init {
        println("Ship2 primary 생성자 호출됨")
    }
}

class Person constructor(name:String){
    var name:String

    init {
        this.name = name
    }

    fun printName(){
        println("name : ${this.name}")
    }
}

class Person2 constructor(var name:String)

class Person3 (var name:String)

fun main() {
    val c1:MyCar = MyCar()
    val c2 = YourCar()
    c2.drive()

    val s1 = Ship()
    val s2 = Ship2()

    val p1 = Person("ezfz")
    p1.printName()

    val p2 = Person2("hysz")
    println(p2.name)

    val p3 = Person3("tripDuo")
    println(p3.name)

    // ### Member ###
    val m1 = Member(1, "ezfz", "홍대")
    val m2 = Member(2, "hysz", "영등포")
    println(m1)
    println(m2)

    val m3 = Member2()
    println(m3)

    val c01 = Car();
    val c02 = Car("porsche")

    c01.drive()
    c02.drive()










}