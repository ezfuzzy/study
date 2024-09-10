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

import java.util.ArrayList;
import java.util.List;

public class GameView extends View {
    //배경이미지 정보를 담을 Bitmap 객체
    Bitmap backImg;
    //화면의 폭과 높이
    int width, height;
    //배경이미지의 y 좌표
    int back1Y, back2Y;
    //유닛(드레곤, 적기) 의 크기를 저장할 필드
    int unitSize;
    //드레곤의 좌표를 저장할 필드
    int dragonX, dragonY;
    //드레곤의 이미지를 저장할 배열
    Bitmap[] dragonImgs=new Bitmap[4];
    //배열에서 출력할 드레곤의 이미지를 결정하는 인덱스
    int dragonIndex=0;
    //카운트를 셀 정수
    int count;
    //미사일의 크기
    int missileSize;
    //미사일 이미지를 담을 배열
    Bitmap[] missileImgs=new Bitmap[3];
    //미사일의 속도
    int missileSpeed;
    //Missile 객체를 저장할 List
    List<Missile> missileList=new ArrayList<>();


    public GameView(Context context) {
        super(context);
    }

    public GameView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
    }
    //화면을 주기적으로 갱신하기 위한 Handler 객체
    Handler handler=new Handler(){
        @Override
        public void handleMessage(@NonNull Message msg) {
            //화면 refresh
            invalidate(); //GameView 의 메소드를 호출해서 View 가 다시 그려지도록 한다
            // 10/1000 초 이후에 다시 Handler 객체에 메세지를 보낸다
            handler.sendEmptyMessageDelayed(0, 10);
        }
    };

    //초기화 메소드
    public void init(){
        //초기화 후에

        //원본 배경이미지 읽어들이기
        Bitmap backImg= BitmapFactory.decodeResource(getResources(), R.drawable.backbg);
        //배경이미지를 View 의 크기에 맞게 조절해서 필드에 저장
        this.backImg = Bitmap.createScaledBitmap(backImg, width, height, false);
        //드레곤 이미지 로딩
        Bitmap dragonImg1=
                BitmapFactory.decodeResource(getResources(), R.drawable.unit1);
        Bitmap dragonImg2=
                BitmapFactory.decodeResource(getResources(), R.drawable.unit2);
        Bitmap dragonImg3=
                BitmapFactory.decodeResource(getResources(), R.drawable.unit3);
        //크기조절
        dragonImg1=Bitmap
                .createScaledBitmap(dragonImg1, unitSize, unitSize, false);
        dragonImg2=Bitmap
                .createScaledBitmap(dragonImg2, unitSize, unitSize, false);
        dragonImg3=Bitmap
                .createScaledBitmap(dragonImg3, unitSize, unitSize, false);
        //로딩한 이미지를 배열에 담는다.
        dragonImgs[0]=dragonImg1;
        dragonImgs[1]=dragonImg2;
        dragonImgs[2]=dragonImg3;
        dragonImgs[3]=dragonImg2;

        //미사일 이미지 로딩
        Bitmap missileImg1=BitmapFactory.decodeResource(getResources(),
                R.drawable.mi1);
        Bitmap missileImg2=BitmapFactory.decodeResource(getResources(),
                R.drawable.mi2);
        Bitmap missileImg3=BitmapFactory.decodeResource(getResources(),
                R.drawable.mi3);
        //미사일 이미지 크기 조절
        missileImg1=Bitmap.createScaledBitmap(missileImg1,
                missileSize, missileSize, false);
        missileImg2=Bitmap.createScaledBitmap(missileImg2,
                missileSize, missileSize, false);
        missileImg3=Bitmap.createScaledBitmap(missileImg3,
                missileSize, missileSize, false);
        //미사일 이미지를 배열에 넣어두기
        missileImgs[0]=missileImg1;
        missileImgs[1]=missileImg2;
        missileImgs[2]=missileImg3;

        //Handler 객체에 메세지를 보내서 지속적으로 View 가 다시 그려지도록 한다.
        handler.sendEmptyMessageDelayed(0, 10);
    }
    //화면(View) 구성 하는 메소드
    @Override
    protected void onDraw(@NonNull Canvas canvas) {
        //배경 이미지 그리기
        canvas.drawBitmap(backImg, 0, back1Y, null);
        canvas.drawBitmap(backImg, 0, back2Y, null);
        // 미사일 그리기
        for(Missile tmp:missileList) {
            canvas.drawBitmap(missileImgs[0], tmp.x - missileSize / 2, tmp.y - missileSize / 2, null);
        }


        //드레곤 이미지 그리기
        canvas.drawBitmap(dragonImgs[dragonIndex], dragonX-unitSize/2, dragonY-unitSize/2, null);

        back1Y += 3;
        back2Y += 3;
        //만일 첫번째 배경이미지가 아래쪽 화면을 벋어났다면
        if(back1Y >= height){
            //첫번째 배경이미지의 좌표를 다시 윗쪽으로 이동한다.
            back1Y=-height;
            back2Y=0;
        }
        if(back2Y >= height){
            back2Y=-height;
            back1Y=0;
        }

        count++;

        if(count%15 == 0){
            //드레곤 애니메이션 처리
            dragonIndex++; //인덱스를 1 증가 시키고
            if(dragonIndex==4){ //만일 존재하지 않는 인덱스라면
                dragonIndex=0;//0 번 인덱스로 초기화
            }
        }

        missileService();
    }

    public void missileService() {

        if (count%10 == 0) {
            missileList.add(new Missile(dragonX, dragonY));
        }
        for (Missile tmp: missileList) {
            tmp.y -= missileSpeed;
            if (tmp.y < -missileSize/2){
                tmp.isValid = false;
            }
        }

        for (int i = missileList.size()-1; i >= 0; i--) {
            Missile tmp = missileList.get(i);

            if(!tmp.isValid) {
                missileList.remove(i);
            }
        }
    }

    //View 가 차지하는 크기 정보가 전달되는 메소드
    @Override
    protected void onSizeChanged(int w, int h, int oldw, int oldh) {
        super.onSizeChanged(w, h, oldw, oldh);
        //화면의 폭과 높이를 필드에 저장한다 (이미지의 크기를 결정할때 필요)
        width=w;
        height=h;

        //배경이미지의 초기좌표
        back1Y = 0;
        back2Y = -height;
        //unitSize
        unitSize=width/5;
        //드레곤의 초기 좌표 부여
        dragonX=width/2; //좌우로 가운데 위치하게
        dragonY=height-unitSize/2; //맨 아래쪽에 위치하게
        //미사일의 크기는 드레곤 크기의 1/4
        missileSize = unitSize/4;
        //미사일의 속도는 화면 높이/50
        missileSpeed=h/50;

        //초기화 메소드 호출
        init();
    }
    //View(GameView) 에 터치 이벤트가 발생되면 호출되는 메소드
    @Override
    public boolean onTouchEvent(MotionEvent event) {
        //매개 변수에 전달되는 MotionEvent 객체에 이벤트에 관련된 정보가 들어 있다.
        dragonX = (int)event.getX(); //이벤트가 발생한 곳의 x 좌표를 드레곤의 좌표에 반영한다.
        return true;
    }
}












