package test.main;

import java.util.ArrayList;

import test.mypac.MemberDto;

public class MainClass06 {
	public static void main(String[] args) {
		ArrayList<MemberDto> members = new ArrayList<>();
		
		MemberDto mem00 = new MemberDto();
		MemberDto mem01 = new MemberDto();
		MemberDto mem02 = new MemberDto();
		// setter
		
		
		members.add(mem00);
		members.add(mem01);
		members.add(mem02);
		
		// getter
	}// end of main
	
	public static void test(ArrayList<MemberDto> members) {
		
		for(MemberDto curMem: members) {
			String info = String.format("번호: %d 이름: %s 주소: %s",
					curMem.getNum(), curMem.getName(), curMem.getAddr());
			System.out.println(info);
		}
		
	}
}
