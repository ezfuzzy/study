package com.example.step07gallery

import android.content.Intent
import android.os.Bundle
import android.view.View
import android.widget.AdapterView
import android.widget.AdapterView.OnItemClickListener
import android.widget.ListView
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import org.json.JSONObject

class MainActivity : AppCompatActivity(), OnItemClickListener {

    val list = mutableListOf<GalleryDto>()
    lateinit var adapter: GalleryAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        adapter = GalleryAdapter(this, R.layout.listview_cell, list)
        val listView: ListView = findViewById(R.id.listView)
        listView.adapter = adapter

        refresh()

        listView.setOnItemClickListener(this)
    }

    fun refresh() {

        // coroutine - thread보다 가볍게 동작하는
        lifecycleScope.launch(Dispatchers.Main) {
            // get data
            val result = RestApiClient.get("http://192.168.0.205:8888/gallery?pageNum=1")

            // list . add
            val jsonObj = JSONObject(result)
            // "list" 키에 있는 배열 추출
            val arr = jsonObj.getJSONArray("list")

            for (i in 0 until arr.length()){
                val cur = arr.getJSONObject(i)
                val dto = GalleryDto().apply {
                    num = cur.getInt("num")
                    writer = cur.getString("writer")
                    caption = cur.getString("caption")
                    regdate = cur.getString("regdate")
                    imagePath = "http://192.168.0.205:8888/upload/images/${cur.getString("saveFileName")}"
                }

                list.add(dto)
            }

            // ui update
            adapter.notifyDataSetChanged()
        }
    }

    override fun onItemClick(p0: AdapterView<*>?, view: View?, index: Int, id: Long) {
        /*
            view - 클릭한 cell의 view 객체
            index - 클릭한 cell의 인덱스
            id - 클릭한 cell의 primary key
         */
        /*
            class type을 만드는 방법
            java - [classname].class
            kotlin - [classname]::class.java
         */
        val intent = Intent(this, DetailActivity::class.java)

        intent.putExtra("num",id)
        startActivity(intent)
    }
}