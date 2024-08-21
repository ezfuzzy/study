package com.example.step03_listvuew;

import android.app.AlertDialog;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import java.util.ArrayList;
import java.util.List;

public class MainActivity extends AppCompatActivity
        implements AdapterView.OnItemClickListener, AdapterView.OnItemLongClickListener {
    //필요한 필드 선언
    ArrayAdapter<String> adapter;
    List<String> names;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        //ListView 에 출력할 sample 데이터
        names =new ArrayList<>();
        names.add("ezfz");
        names.add("hysz");
        for(int i=0; i<100; i++){
            names.add("ezfz"+i);
        }
        //new ArrayAdapter<>(Context type, 셀의 레이아웃 정보, 모델)
        //ListView 에 연결할 Adapter 객체 생성하기
        adapter=new ArrayAdapter<>(this,
                android.R.layout.simple_list_item_1, names);
        //ListView 의 참조값
        ListView listView=findViewById(R.id.listView);
        //ListView 에 아답타 연결하기
        listView.setAdapter(adapter);
        //ListView 에 아이템 클릭 리스너 등록
        listView.setOnItemClickListener(this);
        listView.setOnItemLongClickListener(this); // 꾹 누르는 경우

        // ### add ###

        EditText inputName = findViewById(R.id.inputName);
        Button addBtn = findViewById(R.id.addBtn);

        addBtn.setOnClickListener(view -> {
            names.add(inputName.getText().toString());
            inputName.setText("");
            adapter.notifyDataSetChanged();
        });



    }


    //AdapterView.OnItemClickListener 인터페이스를 구현해서 재정의한 메소드
    @Override
    public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
        // view 에는 cell View 의 참조값이 들어 있고, i 는 선택한 cell 의 인덱스가 들어 있다.

        //선택한 cell 에 출력된 문자열 얻어내기
        String selected = adapter.getItem(i);

        Toast.makeText(this, selected+" 가 선택됨!", Toast.LENGTH_SHORT).show();
    }

    @Override
    public boolean onItemLongClick(AdapterView<?> adapterView, View view, int i, long l) {

        new AlertDialog.Builder(this)
                .setTitle("알림")
                .setMessage("삭제 기?")
                .setPositiveButton("네", (dialogInterface, i1) -> {
                    names.remove(i);
                    // 삭제하는 것 만으로는 화면이 업데이트가 안됨 -> 변경 알림 -> ui update
                    adapter.notifyDataSetChanged();
                })
                .setNegativeButton("아니요", null)
                .create()
                .show();

        return false;
    }
}









