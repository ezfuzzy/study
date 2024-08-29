package com.example.kotlin_study

/*
    Array => 수정 가능, 추가 불가
    List => 수정 불가, 추가 불가
    MutableList => 수정가능, 추가 가능
 */

fun main() {
    val nums = arrayOf(10, 20, 30)
    val nums2 = listOf(15, 25, 35)
    val nums3 = mutableListOf(17, 27, 37)

    nums[0] = 11

    nums3[0] = 19
    nums3.add(47)

    println(nums)
    println(nums2)
    println(nums3)
}

