package com.example.kotlin_study

fun main() {
    val isWait:Boolean = true;
    println("isWait: " + isWait);

    test(null);
    test("asdf");

    val  msgs: List<String>  = listOf("hello", "hi", "bye");

    println(msgs);

    var  f : (String) -> Int =  fun(msg:String ) : Int{
        return 999
    }


    for(i in 1..20){
        print("$i ");
    }
    println("\n\n ### ###")
    val nums = listOf(10, -5, -6, 1, 4, -7, -8, 20, 30, -15, -13)

    val num2 = nums.filter{ it >= 0}.map{ it };
    print(num2);

    val post:MutableMap<String, Any?>  = mutableMapOf<String, Any?>()

    post.put("id", 1)
    post.put("title", "hello")
    post.put("content",  null )
}

fun test(msg:String?){
    println("$msg 의 글자수는 ${msg?.length} 입니다")
}