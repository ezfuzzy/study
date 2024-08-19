package com.example.step02_event;

import android.os.Bundle;
import android.widget.Button;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity2 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main2);

        Button countBtn = findViewById(R.id.countBtn);
        Button countBtn2 = findViewById(R.id.countBtn2);
        Button countBtn3 = findViewById(R.id.countBtn3);

        countBtn.setOnClickListener(view -> {
            try {
                int count = Integer.parseInt(countBtn.getText().toString());
                countBtn.setText(String.valueOf(count+1));
            } catch(NumberFormatException e) {
                e.printStackTrace();
                Toast.makeText(this, "error ...", Toast.LENGTH_SHORT).show();
            }
        });

        final int[] a = {0};
        countBtn2.setOnClickListener(view -> {
            a[0]++;
            countBtn2.setText(" " +a[0]);
        });

        countBtn3.setTag(0);
        countBtn3.setOnClickListener(view -> {
            int currentCount = (int) countBtn3.getTag();
            countBtn3.setTag(++currentCount);
            countBtn3.setText(String.valueOf(currentCount));
        });
    }


}