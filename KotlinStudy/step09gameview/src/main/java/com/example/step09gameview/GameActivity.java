package com.example.step09gameview;

import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

public class GameActivity extends AppCompatActivity {

    SoundManager sManager;
    public static final int SOUND_LAZER = 1;
    public static final int SOUND_SHOOT = 2;
    public static final int SOUND_BIRDDIE = 3;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        GameView gView = new GameView(this);
        setContentView(gView);

        sManager = new SoundManager(this);
        gView.setSoundManager(sManager);
    }

    // 액티비티가 최초 활성화될때 onCreate() 다음으로 호출
    // 비활성화될때 onStop() 호출, 다시 활성화되면 다시 onStop() 호출
    @Override
    protected void onStart() {
        super.onStart();

        sManager.addSound(SOUND_LAZER, R.raw.laser1);
        sManager.addSound(SOUND_SHOOT, R.raw.shoot1);
        sManager.addSound(SOUND_BIRDDIE, R.raw.birddie);
    }

    @Override
    protected void onStop() {
        super.onStop();
        sManager.release();
    }
}