package com.example.step09example;

import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

public class BannerActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_banner);

        String bannerText = getIntent().getStringExtra("bannerText");

        Banner banner = findViewById(R.id.banner);
        banner.init(bannerText);

    }
}