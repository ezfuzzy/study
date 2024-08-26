package com.example.kotlin_study

// abstract method
interface Remocon {
    fun up()
    fun down()
}

class MyRemocon() : Remocon {
    override fun up() {
        println("up up up")
    }

    override fun down() {
        println("down down down")
    }

    fun move() {
        println("move move move")
    }
}

fun main() {
    // MyRemocon 객체를 생성해서 MyRemocon type 상수에 담기
    val r1:MyRemocon = MyRemocon()
    r1.up()
    r1.down()
    r1.move()

    // MyRemocon 객체를 생성해서 Remocon type 상수에 담기
    val r2:Remocon = MyRemocon()
    r2.up()
    r2.down()
    //r2.move() - 이건 없음 : Remocon type이니까

    // type casting
    val r3:MyRemocon = r2 as MyRemocon
    r3.move()

    /*
        smart casting - r2가 MyRemocon type이 맞으면 -> type 확인을 한 블럭에서는 자동으로 casting이 된다.
        이 코드에서 r2가 MyRemocon이 아닌 다른 타입의 인스턴스를 참조했다면,
        if 조건은 false가 될 수 있었겠지만, 이 경우에는 MyRemocon의 인스턴스를 참조하고 있기 때문에 무조건 true가 됩니다.
     */
    if(r2 is MyRemocon) {
        println("true")
        r2.move()
    } else {
        println("false")
        r3.move()
    }

    /*
        익명 클래스를 이용해서 Remocon type의 참조값 얻어내기
        익명 클래스를 정의함과 동시에 객체를 생성하는 것이 object 키워드.

        java에서 아래 코드와 같은 기능

        final Remocon r1 = new Remocon() {
            void up(){}
            void down(){}
        }
    */
    val r01 : Remocon = object : Remocon {
        override fun up() {
            println("channel up")
        }

        override fun down() {
            println("channel down")
        }
    }

    r01.up()
    r01.down()
}