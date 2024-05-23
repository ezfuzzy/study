package test.main;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Random;
import java.util.Set;

public class QuizMain {
	public static void main(String[] args) {
		ArrayList<Integer> nums = new ArrayList<>();
		
		Random randomNum = new Random();
		for (int i = 0; i < 10; i++) {
			nums.add(randomNum.nextInt(1,101));
		}
		
		
		Set<Integer> set00 = new HashSet<>(nums);
		ArrayList<Integer> newNums = new ArrayList<>(set00);
		
		Collections.sort(newNums);
		
		newNums.forEach((num)->{
			System.out.println(num);
		});
	}
}
