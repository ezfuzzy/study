package com.example.step02_event2;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        Button moveBtn = findViewById(R.id.moveBtn);

        moveBtn.setOnClickListener(view -> {

            /*
                activity를 이동하겠다는 Intent(의도) 객체 생성하기
                new Intent(Context type, 이동할 activity class type)
                Context type이 필요한 곳에는 activity의 참조값을 전달하면 된다.

                sp : 글자
                dp : ui
             */

            Intent i = new Intent(this, StudyActivity.class);
            startActivity(i);

        });
    }


}