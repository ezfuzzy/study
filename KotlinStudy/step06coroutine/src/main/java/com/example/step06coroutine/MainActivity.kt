package com.example.step06coroutine

import android.os.Bundle
import android.util.Log
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
import java.io.BufferedReader
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.URL

class MainActivity : AppCompatActivity() {

    var index = 0

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val startBtn:Button = findViewById(R.id.startBtn)
        val resultText:TextView = findViewById(R.id.result)

        val getBtn:Button = findViewById(R.id.getBtn)
        val resultText2:TextView = findViewById(R.id.result2)

        startBtn.setOnClickListener{
            /*
                lifecycleScope.launch - activity의 생명주기 내에서만 동작
                                        activity가 비활성화되면 자동으로 취소됨

                Dispatchers.Main      - Main(UI) thread 내에서만 동작하도록 한다
                                        결과 값을 이용해서 UI를 수정하고자 할 때 사용한다
             */
            lifecycleScope.launch(Dispatchers.Main) {

                val result = doSomething() + index++
                resultText.setText(result)
            }
        }

        getBtn.setOnClickListener{
            lifecycleScope.launch(Dispatchers.Main) {
                val result = getMembers()
                resultText2.setText(result)
                // resultText2.text = result
            }
        }
    }

    suspend fun getMembers():String {
        val result = withContext(Dispatchers.IO){

            val builder = StringBuilder()

            try {
                //요청 url 을 생성자의 인자로 전달하면서 URL 객체를 생성한다
                val url = URL("http://192.168.0.205:8888/api/members")
                //URLConnection 객체를 원래 type (자식 type) 으로 casting 해서 받는다.
                val conn = url.openConnection() as HttpURLConnection
                if (conn != null) {
                    conn.connectTimeout = 20000 //응답을 기다리는 최대 대기 시간
                    conn.requestMethod = "GET" // 요청 메소드 설정 (Default 는 GET)
                    conn.useCaches = false //케쉬 사용 여부
                    //응답 코드를 읽어온다.
                    val responseCode = conn.responseCode
                    if (responseCode == HttpURLConnection.HTTP_OK) { //정상 응답이라면 (200)
                        //문자열을 읽어들일수 있는 객체의 참조값 얻어오기
                        val br =
                            BufferedReader(InputStreamReader(conn.inputStream))
                        //반복문 돌면서
                        while (true) {
                            //문자열을 한줄씩 읽어 들인다.
                            val line = br.readLine() ?: break
                            //StringBuilder 객체에 누적 시키기
                            builder.append(line)
                        }
                    }
                }
            } catch (e: Exception) {
                Log.e("MainActivity", e.message!!)
            } //try~catch

            builder.toString()
        }
        return result
    }

    // 오래걸리는 작업 메소드
    suspend fun doSomething():String {
        /*
            withContext     - Context는 activity임 -> activity의 생명 주기 안에서 동작
            Dispatchers.ID  - Input Output 에 적합한 thread 상에서 동작하도록 함
                            - http request, file io 작업에 적합
         */
        val result = withContext(Dispatchers.IO) {
            Thread.sleep(3000)
            "[result str]"
        }
        return result
    }
}