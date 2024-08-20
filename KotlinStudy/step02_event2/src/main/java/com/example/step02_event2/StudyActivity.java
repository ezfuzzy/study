package com.example.step02_event2;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class StudyActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_study);

        Button moveBtn = findViewById(R.id.moveBtn);
        Button registerBtn = findViewById(R.id.registerBtn);

        EditText input = findViewById(R.id.inputWord);
        TextView result = findViewById(R.id.result);

        moveBtn.setOnClickListener(view -> {
            Intent main_intent = new Intent(this, MainActivity.class);
            startActivity(main_intent);
        });

        registerBtn.setOnClickListener(view -> {
            result.setText(input.getText());
            input.setText("");
        });

    }
}