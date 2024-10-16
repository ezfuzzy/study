package com.example.kotlin_study.mypac

class MyUtil {
    // 동반 객체를 정의할 수 있다
    companion object{

        var version:String="1.0"

        init {
            println("MyUtil companion init{}")
        }

        fun send() {
            println("send send send ")
        }
    }
}