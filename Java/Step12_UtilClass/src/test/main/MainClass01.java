package test.main;

import java.util.ArrayList;

public class MainClass01 {
	public static void main(String[] args) {
		
		// prototype : ArrayList<E>
		
		ArrayList<String> friends = new ArrayList<>();
		friends.add("mj");
		friends.add("fuzzy");
		friends.add("hayeon");
		
		friends.forEach((cur)->{System.out.println(cur);});
		System.out.println("========");
		
		String item = friends.get(0);
		System.out.println(item);
	
		friends.remove(1);
		System.out.println("========");
		friends.forEach((cur)->{System.out.println(cur);});
		
		friends.add(0, "acorn");
		System.out.println("========");
		friends.forEach((cur)->{System.out.println(cur);});
		int fSize = friends.size();
		System.out.println(fSize);
		
		friends.clear();
		System.out.println("========");
		friends.forEach((cur)->{System.out.println(cur);});
	}
}
