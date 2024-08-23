package com.example.kotlin_study

/*
    open 예약어가 붙지 않으면 상속 불가능
 */
open class Phone {
    fun call() {
        println("Phone calling")
    }
}

class CellPhone : Phone() {
    fun mobile_call() {
        println("CellPhone calling")
    }
}

fun main() {
    val p1 = Phone()
    val p2 = CellPhone()

    p1.call()
    p2.call()
    p2.mobile_call()
}