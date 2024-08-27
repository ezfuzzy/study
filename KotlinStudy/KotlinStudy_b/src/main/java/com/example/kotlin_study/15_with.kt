package com.example.kotlin_study

fun main() {
    class Member {

        var num:Int? = null
        var name:String? = null
        var isMan:Boolean? = null


        fun showInfo() {
            println("num : $num, name : $name, isMan : $isMan")
        }
    }

    val m1 = Member()
    m1.num = 1
    m1.name = "ezfz"
    m1.isMan = true
    m1.showInfo()

    val m2 = Member()
    with(m2) {
        num = 2
        name = "hysz"
        isMan = false
        showInfo()
    }
}