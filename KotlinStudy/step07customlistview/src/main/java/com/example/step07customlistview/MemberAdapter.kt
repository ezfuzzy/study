package com.example.step07customlistview

import android.content.Context
import android.text.Layout
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.TextView

// BaseAdapter 추상 클래스를 상속 -> ListView에 연결
class MemberAdapter(val context:Context, val layoutRes:Int, val list:List<MemberDto>) : BaseAdapter() {

    /*
        LayoutInflater 객체는 layout xml문서를 전개해서 실제 view 객체를 만들어주는 객체임
     */
    val inflater:LayoutInflater = LayoutInflater.from(context)
    var index = 0;
    // data의 전체 개수
    override fun getCount(): Int {
        return list.size
    }

    // 인자로 전달되는 인덱스에 해당하는 data를 return
    override fun getItem(idx: Int): Any {
        return list[idx]
    }

    // 인자로 전달되는 인덱스에 해당하는 data의 id를(primary key) return
    override fun getItemId(idx: Int): Long {
        return list[idx].num.toLong()
    }

    // 인자로 전달되는 인덱스에 해당하는 cell view를 만들어서 return
    override fun getView(idx: Int, view: View?, viewGroup: ViewGroup?): View {

        var convertView = view

        // 재활용하는 구조임 view가 100개가 아니라

        if(view == null) {
            convertView = inflater.inflate(layoutRes, viewGroup, false)
            println(index++)
        }
        val dto = list[idx]
        val textNum:TextView? = convertView?.findViewById(R.id.textNum)
        val textName:TextView? = convertView?.findViewById(R.id.textName)
        val textAddr:TextView? = convertView?.findViewById(R.id.textAddr)

        textNum?.text = Integer.toString(dto.num)
        textName?.text = dto.name
        textAddr?.text = dto.addr

        return convertView!! // !! - null이 아니라는 단언
    }

}