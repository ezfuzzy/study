package com.example.kotlin_study.mypac

class Car {

    var name:String? = null

    constructor() {
        println("$name constructor()")
    }
    constructor(name:String){
        this.name = name
        println("${this.name} constructor()")
    }

    fun drive() {
        println("$name is on driving")
    }
}