package test.main;

import java.util.ArrayList;

import test.mypac.Member;

public class MainClass05 {
	public static void main(String[] args) {
		ArrayList<Member> members = new ArrayList<>();
		
		Member mem00 = new Member(0, "mj", "deokso");
		Member mem01 = new Member(0, "fuzzy", "gangnam");
		Member mem02 = new Member(0, "lessa", "hongdae");
		
		members.add(mem00);
		members.add(mem01);
		members.add(mem02);
		
		members.forEach((cur) -> {
			System.out.println("no. " + cur.getNum() 
					+ " name: " + cur.name + " addr: " + cur.addr);
		});
		
	}
}
