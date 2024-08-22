package com.example.step04_webview;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button enterBtn = findViewById(R.id.enterBtn);
        enterBtn.setOnClickListener(view -> {
            Intent i = new Intent(this, SubActivity.class);
            startActivity(i);
        });

    }
}