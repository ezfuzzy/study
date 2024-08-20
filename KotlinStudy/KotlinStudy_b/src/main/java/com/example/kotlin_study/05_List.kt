package com.example.kotlin_study


/*
    list 종류를 나눈 이유는 성능상의 문제 때문이다 > listOf, mutableListOf
    그냥 list 에도 var과 val이 있다고 보면 됨.
 */

fun main() {
    val nums:List<Int> = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    val item1 = nums.get(0)
    val item2 = nums[4]

    nums.forEach (fun(item){
        print("$item ")
    })

    println("\n\n### ###")
    nums.forEach { item ->
        print("$item " )
    }

    println("\n\n### it ###")
    nums.forEach { // it은 암시적으로 가리킴 그냥 (한개일때만)
        print("$it ")
    }

    println("\n\n### map fun ###")
    val result = nums.map(fun(item):Int{
        return item*3
    })
    println(result)

    println("\n### map lambda ###")
    val result2 = nums.map{
        it*4
    }
    println(result2)

    println("\n### filter + map ###")
    val result3 = nums.filter{ it % 2 == 0 }.map { it*10 }
    println(result3)

    println("\n### list3 ###")
    val names = listOf<String>("ezfz", "hysz", "lessa")
    val namesSize = names.size
    val nameLastIdx = names.lastIndex
    val indexes = names.indices

    println(indexes)

    for(i in 0..2){
        print("$i: ${names[i]} ")
    }

    println("\n\n### list3 reverse ###")
    for(i in names.lastIndex downTo 0){
        print("$i: ${names[i]} ")
    }

    println("\n\n### mutable list ###")
    val foods = mutableListOf("치킨", "피자")
    foods.add("aa")
    foods.add("bb")
    foods.add("cc")
    foods.add("dd")
    foods.add("ee")
    foods.add("ff")
    foods.set(4,"ice cream")
    foods[5] = "mandoo"
    foods.removeAt(2)
    foods.removeLast()

    println(foods)

}