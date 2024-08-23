package com.example.step04_webview;

import android.content.Intent;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

import com.example.step04_webview.databinding.ActivityMainBinding;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_main);
//
//        Button enterBtn = findViewById(R.id.enterBtn);
//        enterBtn.setOnClickListener(view -> {
//            Intent i = new Intent(this, SubActivity.class);
//            startActivity(i);
//        });

        // ### view binding ###
        ActivityMainBinding binding = ActivityMainBinding.inflate(getLayoutInflater());
        // -> LayoutInflater 객체를 리턴해줌 - 레이아웃 전개자 객체 - xml문서를 전개해서 view를 만들어주는 객체

        setContentView(binding.getRoot());
        binding.enterBtn.setOnClickListener(view -> {
            Intent i = new Intent(this, SubActivity.class);
            startActivity(i);
        });

    }
}