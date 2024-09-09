package com.example.step09gameview;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.os.Handler;
import android.os.Message;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

public class GameView extends View {

    // 배경 이미지 정보를 담을 Bitmap 객체
    Bitmap backImg;
    Bitmap dragonImg;
    // 화면의 폭과 높이
    int width, height;

    int back1Y, back2Y = 0;
    int unitSize;
    int dragonX, dragonY;

    public GameView(Context context) {
        super(context);
    }

    public GameView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
    }

    Handler handler = new Handler() {
        @Override
        public void handleMessage(@NonNull Message msg) {
            invalidate(); // re-rendering
            handler.sendEmptyMessageDelayed(0,10); // 10ms
        }
    };

    public void init() {
        Bitmap backImgSourse = BitmapFactory.decodeResource(getResources(), R.drawable.backbg);
        this.backImg = Bitmap.createScaledBitmap(backImgSourse, width, height, false);

        Bitmap dragonImgSourse = BitmapFactory.decodeResource(getResources(), R.drawable.unit1);
        this.dragonImg = Bitmap.createScaledBitmap(dragonImgSourse, width/5, height/10, false);

        handler.sendEmptyMessageDelayed(0, 10);
    }

    @Override
    protected void onDraw(@NonNull Canvas canvas) {
        canvas.drawBitmap(backImg, 0, back1Y, null);
        canvas.drawBitmap(backImg, 0, back2Y, null);
        canvas.drawBitmap(dragonImg, dragonX, dragonY, null);

        back1Y += 3;
        back2Y += 3;

        if(back1Y >= height){
            back1Y = -height;
            back2Y = 0;
        }

        if(back2Y >= height){
            back2Y = -height;
            back1Y = 0;
        }
    }

    @Override
    protected void onSizeChanged(int w, int h, int oldw, int oldh) {
        super.onSizeChanged(w, h, oldw, oldh);

        width = w;
        height = h;

        back1Y = 0;
        back2Y = -height;

        unitSize = width/5;

        dragonX = width/2 - unitSize/2;
        dragonY = height - unitSize;

        init();
    }

    // view 터치이벤트 control
    @Override
    public boolean onTouchEvent(MotionEvent event) {
        // 매개벼눗에 전달되는 MotionEvent 객체에 이벤트 관련 정보가 있음

        dragonX = (int)event.getX() - unitSize/2;
        dragonY = (int)event.getY() - unitSize/2;


        return true;
    }
}
