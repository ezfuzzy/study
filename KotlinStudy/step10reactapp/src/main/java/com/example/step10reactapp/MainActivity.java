package com.example.step10reactapp;

import android.content.Intent;
import android.os.Bundle;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;

import androidx.appcompat.app.AppCompatActivity;

import com.example.step10reactapp.databinding.ActivityMainBinding;

public class MainActivity extends AppCompatActivity {

    ActivityMainBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        binding = ActivityMainBinding.inflate(getLayoutInflater());

        setContentView(binding.getRoot());

        binding.startBtn.setOnClickListener(view -> {
            startActivity(new Intent(this, ReactActivity.class));
        });
    }

    @Override
    protected void onStart() {
        super.onStart();

        Animation zoom_in = AnimationUtils.loadAnimation(this, R.anim.zoom_in);

        binding.imageView.startAnimation(zoom_in);

    }
}