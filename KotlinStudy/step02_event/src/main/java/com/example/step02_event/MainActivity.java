package com.example.step02_event;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity
        implements View.OnClickListener { // OnClickListener type 으로 만들기


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // R.layout.xxx -> res/layout/xxx.xml 문서를 통해 화면 구성
        setContentView(R.layout.activity_main);

        /*
            화면구성을 한 xml파일의 모든 UI가 객체로 생성됨
            -> xml파일에서 지정한 id를 가져와서 control 가능
         */
        Button sendBtn = findViewById(R.id.sendBtn);
        Button saveBtn = findViewById(R.id.saveBtn);
        Button deleteBtn = findViewById(R.id.deleteBtn);

        // CharSequence = String type
        sendBtn.setOnClickListener(this);
        saveBtn.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {
                Toast.makeText(MainActivity.this, "saved ...", Toast.LENGTH_SHORT).show();
            }
        });

        deleteBtn.setOnClickListener(view -> { // 여기선 this가 activity를 가리킴
            Toast.makeText(this, "deleted ...", Toast.LENGTH_SHORT).show();
        });
    }

    // override할 메소드가 하나 ? -> functional interface
    @Override
    public void onClick(View view) { // 여기서 this는 activity임
        Toast.makeText(this, "sent ...", Toast.LENGTH_SHORT).show();
    }


}