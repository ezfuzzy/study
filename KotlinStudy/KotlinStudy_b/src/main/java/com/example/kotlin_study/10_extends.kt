package com.example.kotlin_study

/*
    open 예약어가 붙지 않으면 상속 불가능
 */
open class Phone {
    fun call() {
        println("Phone calling")
    }
}

open class CellPhone : Phone() {
    fun mobile_call() {
        println("CellPhone calling")
    }

    open fun takePicture() {
        println("100만 화소 사진 촬영")
    }
}

class SmartPhone : CellPhone() {
    fun doInternet() {
        println("connect to internet")
    }

    override fun takePicture() {
        //super.takePicture()
        println("1000만 화소 사진 촬영")
    }
}

fun main() {
    val p1 = Phone()
    val p2 = CellPhone()
    val p3 = SmartPhone()

    p1.call()
    p2.call()
    p2.mobile_call()
    p2.takePicture()

    p3.call()
    p3.doInternet()
    p3.takePicture()
}