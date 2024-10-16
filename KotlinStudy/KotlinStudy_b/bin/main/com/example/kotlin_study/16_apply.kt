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

    val m1 = Member().apply {
        num=1
        name="ezfz"
        isMan=true
    }

    // with를 apply 처럼 사용하려면 이렇게 해야함 - pp
    val m2 = with(Member()) {
        num = 2
        name = "hysz"
        isMan = false
        this
    }


}