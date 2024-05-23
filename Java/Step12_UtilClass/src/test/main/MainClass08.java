package test.main;

import java.util.ArrayList;
import java.util.HashMap;

public class MainClass08 {
	
	public static void main(String[] args) {
		ArrayList<HashMap<String, Object>> members = new ArrayList<>();
		
		HashMap<String, Object> hm1 = new HashMap<>();
		HashMap<String, Object> hm2 = new HashMap<>();
		HashMap<String, Object> hm3 = new HashMap<>();
		
		hm1.put("num", 1);
		hm1.put("name", "mj");
		hm1.put("addr", "ds");
		
		hm2.put("num", 2);
		hm2.put("name", "ez");
		hm2.put("addr", "hd");
		
		hm3.put("num", 3);
		hm3.put("name", "fz");
		hm3.put("addr", "gn");
		
		members.add(hm1);
		members.add(hm2);
		members.add(hm3);
		
		members.forEach((curMem)->{
			String info = String.format("num: %d, name: %s, addr: %s",
					curMem.get("num"), curMem.get("name"), curMem.get("addr"));
			System.out.println(info);
		});
		
		
		
		
		
	}// end of main
}
