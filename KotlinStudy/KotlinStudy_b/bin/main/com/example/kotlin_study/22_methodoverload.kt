package com.example.kotlin_study

class MyTool {
    fun make() {}
    fun make(amount: Int) {}
    fun make(amount: Int, name:String) {}
}

class YourTool {
    fun make(amount:Int=0, name:String="") {}
}

class OurTool {
    // java에서도 다양한 모양의 메소드를 호출할 수 있게 하려면 @Jvm annotation
    @JvmOverloads fun make(amount:Int=0, name:String=""){}
}

fun main() {
    MyTool().apply {
        make()
        make(10)
        make(11, "hammer")
    }

    YourTool().apply {
        make()
        make(12)
        make(13, "axe")
    }
}