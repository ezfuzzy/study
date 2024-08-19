package com.example.a04_function

fun main() {

    /*  ### map ###
        readonly map type
        .kt Any =비슷= .java Object
     */
    val mem = mapOf<String, Any>("num" to 1, "name" to "ezfz", "isMan" to true)

    // mem.get -> return type : Any?
    val num1:Any? = mem.get("num")
    val num2:Any? = mem["num"]

    // type casting
    val name3:String = mem.get("name") as String
    val name4:String = mem.get("name").toString()


}