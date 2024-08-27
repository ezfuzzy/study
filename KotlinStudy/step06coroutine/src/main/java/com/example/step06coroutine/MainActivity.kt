package com.example.step06coroutine

import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import androidx.lifecycle.lifecycleScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class MainActivity : AppCompatActivity() {

    var index = 0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val startBtn:Button = findViewById(R.id.startBtn)
        val resultText:TextView = findViewById(R.id.result)


        startBtn.setOnClickListener{
            lifecycleScope.launch(Dispatchers.Main) {

                val result = doSomething() + index++
                resultText.setText(result)
            }
        }
    }

    suspend fun doSomething():String {
        withContext(Dispatchers.IO) {
            Thread.sleep(3000)
        }
        return "[result str]"
    }
}