package test.main;

import java.sql.Connection;
import java.sql.PreparedStatement;

import test.util.DBConnecter;

public class MainClass06 {
  public static void main(String[] args) {
    String name = "lessa55";
    String addr = "soez55";
         
    Connection conn = null;
    PreparedStatement pstmt = null;
     
    try {
      conn = new DBConnecter("scott", "tiger").getConn();
       
      String sql = "insert into member"
    	 + " values(member_seq.nextval, ?, ?)";
     
      pstmt = conn.prepareStatement(sql);
      pstmt.setString(1, name);
      pstmt.setString(2, addr);
      
      int rowCount = pstmt.executeUpdate();
      System.out.println(rowCount + "good");
    } catch (Exception e01) {
      e01.printStackTrace(); 
    }
  }
}
