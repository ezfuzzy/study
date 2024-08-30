package com.example.step07customlistview

import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.ListView
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import org.json.JSONArray
import org.json.JSONObject
import java.io.BufferedReader
import java.io.InputStreamReader
import java.io.OutputStreamWriter
import java.net.HttpURLConnection
import java.net.URL

/*
    [  json 문자열 사용하기 ]
    [ ] => json array
    {} => json object
 */
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // model 객체
        val list:MutableList<MemberDto> = mutableListOf()

        // ListView에 연결할 어댑터객체 생성해서 연결하기
        val adapter = MemberAdapter(this, R.layout.listview_cell, list)

        val listView:ListView = findViewById(R.id.listView)
        listView.adapter = adapter

        val inputName:EditText = findViewById(R.id.inputName)
        val inputAddr:EditText = findViewById(R.id.inputAddr)

        val addBtn:Button = findViewById(R.id.addBtn)

        addBtn.setOnClickListener{
            lifecycleScope.launch(Dispatchers.Main) {
                addMember(inputName.text.toString(), inputAddr.text.toString())
            }


        }

        // json 문자열을 log에 출력
        lifecycleScope.launch(Dispatchers.Main) {
            val result = getMemeber()
            Log.d("### result ### ", result)
            // 응답받은 문자열의 형식이 [{},{},{}, ...] -> JSONArray 객체 생성
            val array = JSONArray(result)

            for (i in 0 until array.length()){
                val cur = array.getJSONObject(i)
//                list.add(MemberDto(cur.getInt("num"), cur.getString("name"), cur.getString("addr")))
                val mem = MemberDto().apply {
                    num = cur.getInt("num")
                    name = cur.getString("name")
                    addr = cur.getString("addr")
                }
                list.add(mem)
            }
            adapter.notifyDataSetChanged()
        }
    }

    suspend fun getMemeber():String {
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

    suspend fun addMember(name:String, addr:String):String {

        val result = withContext(Dispatchers.IO){

            val builder = StringBuilder()

            try {
                //요청 url 을 생성자의 인자로 전달하면서 URL 객체를 생성한다
                val url = URL("http://192.168.0.205:8888/api/members")
                //URLConnection 객체를 원래 type (자식 type) 으로 casting 해서 받는다.
                val conn = url.openConnection() as HttpURLConnection
                if (conn != null) {
                    conn.connectTimeout = 20000 //응답을 기다리는 최대 대기 시간
                    conn.requestMethod = "POST" // 요청 메소드 설정 (Default 는 GET)
                    conn.useCaches = false //케쉬 사용 여부
                    conn.setRequestProperty("Content-Type", "application/json")
                    //문자열을 출력하기 위한 객체
                    val osw = OutputStreamWriter(conn.outputStream)
                    osw.write("""
                        { 
                            "name" : $name,
                            "addr" : $addr
                        }
                    """.trimIndent())
                    osw.flush()

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
}