package com.example.myapplication;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    TextView currentNum;
    int num;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        currentNum = findViewById(R.id.currentNum); // 나

        Button minusBtn = findViewById(R.id.minusBtn);
        minusBtn.setOnClickListener(view -> {
            num--;
            String strNum = Integer.toString(num);
            currentNum.setText(strNum);
        });

        Button plusBtn = findViewById(R.id.plusBtn);
        plusBtn.setOnClickListener(this);

    }

    @Override
    public void onClick(View view) {
        num++;
        String strNum = Integer.toString(num);
        currentNum.setText(strNum);
    }
}