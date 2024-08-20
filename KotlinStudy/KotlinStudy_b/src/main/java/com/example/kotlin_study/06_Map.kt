package com.example.kotlin_study

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

    /*
        ### mutable map ###
    */

    val mem2 = mutableMapOf<String, Any>("num" to 2, "name" to "hysz", "isMan" to false)

    val post = mutableMapOf<String, Any>()

    post["id"] = 1
    post["title"] = "title is good"
    post["content"] = "content is nice"

    val post_id = post["id"]
    val post_title = post["title"]
    val post_content = post["content"]




}