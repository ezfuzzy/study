package com.example.kotlin_study

import java.util.Scanner

fun main(){
    // 예약어라 백틱으로 감싸야함
    val scan=Scanner(System.`in`)
    print("숫자입력:")
    //숫자 형식의 문자열을 입력 받아서
    val result:String = scan.nextLine()
    try {
        //정수로 변환
        val num=Integer.parseInt(result)
        if (num % 2 == 1) {
            println("$num 은 홀수 입니다.")
        } else {
            println("$num 은 짝수 입니다.")
        }
    }catch (nfe:NumberFormatException){
        nfe.printStackTrace()
    }

    val scan2=Scanner(System.`in`)
    print("숫자입력:")
    //숫자 형식의 문자열을 입력 받아서
    val strNum:String = scan2.nextLine()
    val result2 = try {
        Integer.parseInt(strNum)
    }catch (nfe:NumberFormatException){
        0
    } // 예외 발생 여부에 따라 try catch 구문의 마지막줄이 대입됨

    println("input number : $result2 ")


    println("main 함수가 종료 됩니다")
}
