package test.main;

import java.util.ArrayList;
import java.util.List;

import test.dao.MemberDao;
import test.dto.MemberDto;

public class MainClass08 {
  public static void main(String[] args) {
    
    int num = 4;
    String name = "ffuzzyy", addr = "seoul";
    
    MemberDto dto = new MemberDto(num, name, addr);
    
    MemberDao dao = new MemberDao("scott", "tiger");
    
    boolean isSuccess = false;

//    isSuccess = dao.insert(dto);
    
//    isSuccess = dao.delete(6);
//    isSuccess = dao.update(dto);
//    dto = dao.getMemberByNum(dto.getNum());
//    System.out.println(dto.getNum() + " | " + dto.getName() + " | " + dto.getAddr());
    
    List<MemberDto> list = new ArrayList<>();
    list = dao.getAllMember();
    
    list.forEach((curMember) -> {
      String info01 = String.format("num: %5d | name: %12s | addr: %12s",
	    curMember.getNum(), curMember.getName(), curMember.getAddr());
	System.out.println(info01);
    });
    
    System.out.println("isSuccess ? " + isSuccess);
  }
}
