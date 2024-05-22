package test.main;

import java.util.ArrayList;
import java.util.function.Consumer;

public class MainClass03 {
	public static void main(String[] args) {
		ArrayList<String> greets = new ArrayList<>();
		
		greets.add("hi");
		greets.add("ju temm");
		greets.add("Te quire");
		
		Consumer<String> con2 = (t) -> {
			System.out.println(t);
		};
		
//	greets.forEach((con2)->{});
		greets.forEach(con2);
		
		
		
	}
}
