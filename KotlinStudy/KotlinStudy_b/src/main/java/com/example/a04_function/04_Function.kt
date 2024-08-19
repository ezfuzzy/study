package com.example.a04_function


fun useFunc(f:() -> Unit) {
    f()
    println("hi")
}

fun useFunc2(f:() -> Unit) {
    f()
}

fun main() {
    useFunc(fun() {
        println("useFunc is executed")
    })

    useFunc2 {
        println("func2 is executed")
    }
}
