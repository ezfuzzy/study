package com.example.kotlin_study

fun main() {

    val num = 10;

    val result2 = if(num%2 == 1) {
        "$num 은 홀수임"
    } else {
        "$num 은 짝수임"
    }

    val result3 = if(num%2 == 1) "$num 은 홀수임" else "$num 은 짝수임"
}