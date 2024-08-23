package com.example.kotlin_study.mypac

class Cat {

    var name:String? = null
    // nullable로 만들고 싶지 않은데 나중에 초기화하고 싶은 경우
    lateinit var name2:String

    fun putName(name:String) {
        this.name = name
        this.name2 = name
    }

    fun showInfo(){
        println("고양이 이름은 ${this.name}.")
        println("고양이 이름 글자수는 ${this.name?.length}.")

        println("고양이 이름은 ${this.name2}.")
        println("고양이 이름 글자수는 ${this.name2.length}.")
    }

}