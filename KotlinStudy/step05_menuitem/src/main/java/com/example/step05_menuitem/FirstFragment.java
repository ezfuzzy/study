package com.example.step05_menuitem;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.navigation.fragment.NavHostFragment;

import com.example.step05_menuitem.databinding.FragmentFirstBinding;

/*
    액티비티 안에서 동작하는 미니 액티비티 . . .
    재사용성 good ~
    Fragment
    - activity 밑에서 관리되는 component (미니 액티비티라고 할 수도 있음)
    - 재사용성 good
    - 자주 쓰이는 ui와 기능을 Fragment로 만들어 놓고 액티비티에서 import 가능
 */
public class FirstFragment extends Fragment {

    private FragmentFirstBinding binding;

    @Override
    public View onCreateView(
            @NonNull LayoutInflater inflater, ViewGroup container,
            Bundle savedInstanceState
    ) {

        binding = FragmentFirstBinding.inflate(inflater, container, false);
        return binding.getRoot();

    }

    public void onViewCreated(@NonNull View view, Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        // Fragment의 동작 정의
        binding.buttonFirst.setOnClickListener(v ->
                NavHostFragment.findNavController(FirstFragment.this)
                        .navigate(R.id.action_FirstFragment_to_SecondFragment)
        );
    }

    // 소멸자라고 보면 됨 - Fragment가 비활성화될 때 호출
    @Override
    public void onDestroyView() {
        super.onDestroyView();
        // 마무리 작업 수행
        binding = null;
    }

}