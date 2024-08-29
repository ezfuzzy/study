package com.example.step07customlistview

import android.os.Bundle
import android.widget.ListView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // model 객체
        val list:MutableList<MemberDto> = mutableListOf()

        for (i in 1..100){
            list.add(MemberDto(i, "ezfz$i", "hysz$i"))
        }

        // ListView에 연결할 어댑터객체 생성해서 연결하기
        val adapter = MemberAdapter(this, R.layout.listview_cell, list)

        val listView:ListView = findViewById(R.id.listView)
        listView.adapter = adapter

    }
}