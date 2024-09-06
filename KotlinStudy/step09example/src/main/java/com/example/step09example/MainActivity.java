package com.example.step09example;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button startBtn = findViewById(R.id.startBtn);
        EditText inputBanner = findViewById(R.id.inputBanner);

        startBtn.setOnClickListener(view -> {
            Intent i = new Intent(this, BannerActivity.class);

            i.putExtra("bannerText", inputBanner.getText());
            startActivity(i);
        });
    }
}