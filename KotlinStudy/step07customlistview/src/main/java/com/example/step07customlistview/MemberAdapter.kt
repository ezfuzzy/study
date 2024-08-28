package com.example.step07customlistview

import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter

// BaseAdapter 추상 클래스를 상속 -> ListView에 연결
class MemberAdapter : BaseAdapter() {

    // data의 전체 개수
    override fun getCount(): Int {
        TODO("Not yet implemented")
    }

    // 인자로 전달되는 인덱스에 해당하는 data를 return
    override fun getItem(idx: Int): Any {
        TODO("Not yet implemented")
    }

    // 인자로 전달되는 인덱스에 해당하는 data의 id를(primary key) return
    override fun getItemId(idx: Int): Long {
        TODO("Not yet implemented")
    }

    // 인자로 전달되는 인덱스에 해당하는 cell view를 만들어서 return
    override fun getView(idx: Int, p1: View?, p2: ViewGroup?): View {
        TODO("Not yet implemented")
    }

}