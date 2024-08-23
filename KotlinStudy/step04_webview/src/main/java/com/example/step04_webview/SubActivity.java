package com.example.step04_webview;

import android.os.Bundle;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import androidx.appcompat.app.AppCompatActivity;

import com.example.step04_webview.databinding.ActivitySubBinding;

public class SubActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        /*setContentView(R.layout.activity_sub);

        WebView webview = findViewById(R.id.webview);

        WebSettings ws = webview.getSettings();
        ws.setJavaScriptEnabled(true);
        ws.setDomStorageEnabled(true);

        webview.setWebViewClient(new WebViewClient(){
            // over ride
        });

        webview.setWebChromeClient(new WebChromeClient());
        // load web page
        //webview.loadUrl("192.168.0.205:8888/boot11");
        webview.loadUrl("https://naver.com");

        Button exitBtn = findViewById(R.id.exitBtn);
        exitBtn.setOnClickListener(view -> {
            // activity의 finish() 메소드를 호출하면 SubActivity가 종료된다.
            finish();
        });
*/

        ActivitySubBinding binding = ActivitySubBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        WebView webview = binding.webview;

        WebSettings ws = webview.getSettings();
        ws.setJavaScriptEnabled(true);
        ws.setDomStorageEnabled(true);

        webview.setWebViewClient(new WebViewClient());
        webview.setWebChromeClient(new WebChromeClient());
        webview.loadUrl("https://naver.com");

        binding.exitBtn.setOnClickListener(view -> {
            finish();
        });
    }
}