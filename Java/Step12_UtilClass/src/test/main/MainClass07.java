package test.main;

import java.util.HashMap;

import test.mypac.Car;

public class MainClass07 {
	public static void main(String[] args) {
		HashMap<String, Object> map = new HashMap<>();
		map.put("num", 1);
		map.put("name", "mj");
		map.put("isMan", true);

		int num = (int)map.get("num");
		String name = (String)map.get("name");
		boolean isMan = (boolean)map.get("isMan");
		
		
		map.put("car", new Car("benz"));
		Car c00 = (Car)map.get("car");
		c00.drive();
		
		
	}
}
