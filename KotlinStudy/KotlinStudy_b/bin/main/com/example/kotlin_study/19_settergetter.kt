package com.example.kotlin_study

class StarBucks {
    var location:String? = null

        set(value) {
            field = "$value StarBucks"
        }
        get() {
            if(field == null){
                return "필드는 null임 - $field "
            }else {
                return "필드 : $field"
            }
        }

    fun showInfo() {
        println("$location")
    }


}

// 생성자를 선언함과 동시에 필드가 자동으로 생성
data class Rect(val width:Int, val height:Int){
    val area:Int
        get(){
            return width*height
        }

    fun showInfo() {
        println("width : $width, height : $height, area: $area")
    }
}

fun main() {
    var s1 = StarBucks()
    s1.location = "강남"

    var s2 = StarBucks()
    s2.location = "논현"

    var s3 = StarBucks()

    s1.showInfo()
    s2.showInfo()
    s3.showInfo()

    val r1 = Rect(10, 20)
    r1.showInfo()
}