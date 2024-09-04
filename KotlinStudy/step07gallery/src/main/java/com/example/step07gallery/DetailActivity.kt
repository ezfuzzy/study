package com.example.step07gallery

import android.content.Intent
import android.os.Bundle
import android.widget.ImageView
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.lifecycle.lifecycleScope
import com.bumptech.glide.Glide
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import org.json.JSONObject

class DetailActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContentView(R.layout.activity_detail)

        //val i: Intent = getIntent()
        //val i = intent

        // pk
        val num = intent.getLongExtra("num", 0)

        val imageView: ImageView = findViewById(R.id.imageView)
        val textWriter: TextView = findViewById(R.id.writer)
        val textCaption: TextView = findViewById(R.id.caption)
        val textRegdate: TextView = findViewById(R.id.regdate)

        lifecycleScope.launch(Dispatchers.Main) {
            val result = RestApiClient.get("http://192.168.0.205:8888/gallery/$num")

            val jsonObj = JSONObject(result)

            textWriter.text = jsonObj.getString("writer")
            textCaption.text = jsonObj.getString("caption")
            textRegdate.text = jsonObj.getString("regdate")

            Glide.with(this@DetailActivity)
                .load("http://192.168.0.205:8888/upload/images/${jsonObj.getString("saveFileName")}")
                .fitCenter()
                .placeholder(R.drawable.ic_launcher_background)
                .into(imageView)
        }
    }
}