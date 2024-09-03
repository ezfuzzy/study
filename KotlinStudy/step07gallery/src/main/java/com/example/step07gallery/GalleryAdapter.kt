package com.example.step07gallery

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import android.widget.ImageView
import android.widget.TextView
import com.bumptech.glide.Glide

class GalleryAdapter(val context: Context, val layoutRes:Int, val list:List<GalleryDto>) : BaseAdapter() {

    val inflater: LayoutInflater = LayoutInflater.from(context)

    override fun getCount(): Int {
        return list.size
    }

    override fun getItem(idx: Int): Any {
        return list[idx]
    }

    override fun getItemId(idx: Int): Long {
        return list[idx].num.toLong()
    }

    override fun getView(idx: Int, view: View?, parent: ViewGroup?): View {

        var convertView = view // view가 nullable이니까 convertView도 nullable

        // 재활용하는 구조임 view가 100개가 아니라

        if(view == null) {
            convertView = inflater.inflate(layoutRes, parent, false)
        }
        val dto = list[idx]
        // !! - null이 아니라는 단언
        val imageView: ImageView = convertView!!.findViewById(R.id.imageView)
        val textWriter: TextView = convertView.findViewById(R.id.writer)
        val textCaption: TextView = convertView.findViewById(R.id.caption)
        val textRegdate: TextView = convertView.findViewById(R.id.regdate)

        textWriter.text = dto.writer
        textCaption.text = dto.caption
        textRegdate.text = dto.regdate

        Glide.with(context)
            .load(dto.imagePath)
            .centerCrop()
            .placeholder(R.drawable.ic_launcher_background)
            .into(imageView)

        return convertView
    }
    

}