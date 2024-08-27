package com.example.kotlin_study.java;

import com.example.kotlin_study.Phone;
import com.example.kotlin_study.mypac.MyUtil;
import com.example.kotlin_study.mypac.YourUtil;

public class MainClass01 {
    public static void main(String[] args) {
        Phone p1 = new Phone();
        p1.call();

        String v = MyUtil.Companion.getVersion();
        System.out.println(v);
        MyUtil.Companion.send();

        System.out.println("#######################################");

        String v2 = YourUtil.getVersion();
        System.out.println(v2);
        YourUtil.send();
    }
}
