package com.example.step09gameview;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        SoundManager sm = new SoundManager(this);
        sm.addSound(1, R.raw.birddie);
        sm.addSound(2, R.raw.laser1);
        sm.addSound(3, R.raw.shoot1);

        Button startBtn = findViewById(R.id.startBtn);
        startBtn.setOnClickListener(view -> {
            sm.playSound(3);
            startActivity(new Intent(this, GameActivity.class));
        });



    }
}