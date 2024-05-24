package test.main;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Random;
import java.util.Set;

public class QuizeMain02 {
	public static void main(String[] args) {
		
		    
		Set<Integer> set01 = new HashSet<>();
		
		Random rands = new Random();
		while(set01.size() != 6) {
			set01.add(rands.nextInt(45)+1);
		}
		
		List<Integer> lottoNums = new ArrayList<>(set01);
		Collections.sort(lottoNums);
		
		lottoNums.forEach((curNum)->{
			System.out.print(curNum + " ");
		});
		
	}
}
