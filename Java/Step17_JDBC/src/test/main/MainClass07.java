package test.main;

import java.sql.Connection;
import java.sql.PreparedStatement;

import test.dto.MemberDtodb;
import test.util.DBConnecter;

public class MainClass07 {
  public static void main(String[] args) {
    String name = "lessa55";
    String addr = "soez55";
    
    MemberDtodb curMember = new MemberDtodb(0, name, addr);
    insert(curMember);
    
  }
  
  public static void insert(MemberDtodb dto) { // static method 안에서는 static method만 호출 가능
    Connection conn = null;
    PreparedStatement pstmt = null;
     
    try {
      conn = new DBConnecter("scott", "tiger").getConn();
       
      String sql = "insert into member"
    	 + " values(member_seq.nextval, ?, ?)";
     
      pstmt = conn.prepareStatement(sql);
      pstmt.setString(1, dto.getName());
      pstmt.setString(2, dto.getAddr());
      
      int rowCount = pstmt.executeUpdate();
      System.out.println(rowCount + "good");
    } catch (Exception e01) {
      e01.printStackTrace(); 
    }
    
  }
  
}
