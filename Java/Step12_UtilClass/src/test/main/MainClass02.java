package test.main;

import java.util.ArrayList;

public class MainClass02 {
	public static void main(String[] args) {
		ArrayList<Integer> nums = new ArrayList<>();
		
		nums.add(10);
		nums.add(20);
		nums.add(30);
		
		nums.forEach((num)->{
			System.out.println(num);
		});
		
		
	}
}
