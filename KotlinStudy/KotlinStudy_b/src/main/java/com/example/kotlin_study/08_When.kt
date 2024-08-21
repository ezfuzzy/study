package com.example.kotlin_study

import java.util.Scanner

/*
    kotlin <=> java 서로 import 해서 클래스 사용 가능

    kt, java 둘다 compile하면 xxx.class 파일로 변경됨
    -> 호환 ㄱㄴ

    kotlin은 new를 사용하지 않음
    -> 클래스명()
 */


fun main() {

    /*
        `in` 은 kotlin에서 예약어임 -> 백틱으로 감쌈
     */

    val scan = Scanner(System.`in`)

    println("Gun: 1, Sword:2, Arrow: 3")
    println("chooes the weapon (1, 2, 3)")

    val weapon = scan.nextInt()

    when(weapon) { // kotlin의 switch문
        1 -> {
            println("gun gun gun")
        }

        2 -> {
            println("sword sword sword")
        }

        3 -> {
            println("Arrow Arrow Arrow")
        }
    }

    print("\n type your 점수 : ")
    val 점수 = scan.nextInt()
    when(점수) {
        in 90..100 -> println("first place")
        in 80..90 -> println("second place")
        else -> println("not bad")
    }

    println("### ###")

    when {
        점수 >= 90 -> println("first place")
        점수 >= 80 -> println("second place")
        else -> println("not bad")
    }
}