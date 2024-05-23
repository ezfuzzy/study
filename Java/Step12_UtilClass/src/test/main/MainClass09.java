package test.main;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class MainClass09 {
	public static void main(String[] args) {
		Set<Object> set00 = new HashSet<>();
		
		set00.contains("keyword");
		// remove, size, clear ...
		
		
		List<Integer> list00 = new ArrayList<>();
		// List는 Collection 이기도 하다.
		Collection<Integer> nums2 = list00;
		
		// HashSet 객체의 생성자에 ArrayList(Collection)을 넣으면 중복제거가 된다.
		Set<Integer> set01 = new HashSet<>(list00);
		
		Collections.sort(list00);
		Collections.sort(list00, Collections.reverseOrder());
	}
}
