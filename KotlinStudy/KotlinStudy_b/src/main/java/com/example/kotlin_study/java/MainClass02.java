package com.example.kotlin_study.java;

import com.example.kotlin_study.MyPerson;
import com.example.kotlin_study.MyTool;
import com.example.kotlin_study.OurPerson;
import com.example.kotlin_study.OurPerson2;
import com.example.kotlin_study.OurTool;
import com.example.kotlin_study.YourPerson;
import com.example.kotlin_study.YourTool;

public class MainClass02 {
    public static void main(String[] args) {
        MyPerson p1 = new MyPerson();
        MyPerson p2 = new MyPerson("ezfz");
        MyPerson p3 = new MyPerson("ezfz", 22);

        // YourPerson은 기본 생성자 없어짐
        YourPerson o4 = new YourPerson("ezfz", 23);

        // jvm 어노테이션 붙은 class만 kotlin처럼 사용가능
        OurPerson p5 = new OurPerson();
        OurPerson2 p6 = new OurPerson2("ezfz");
        OurPerson p7 = new OurPerson("ezfz", 22);

        MyTool mt = new MyTool();
        mt.make(10, "hammer");

        YourTool yt = new YourTool();
//        yt.make(10); 이거 안됨
        yt.make(10, "axe");

        OurTool ot = new OurTool();
        ot.make();
        ot.make(13);
        ot.make(14, "gun");

    }
}
