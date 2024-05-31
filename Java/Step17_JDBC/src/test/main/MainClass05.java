package test.main;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class MainClass05 {
  public static void main(String[] args) {
    String name = "33fuzzy";
    String addr = "33seongsu33";
    
    Connection conn = null;
    
    try {
      Class.forName("oracle.jdbc.driver.OracleDriver");
      String url = "jdbc:oracle:thin:@localhost:1521:xe";
      conn = DriverManager.getConnection(url, "scott", "tiger");
      
    } catch (Exception e00) {
      e00.printStackTrace();
    }
    
    PreparedStatement pstmt = null;
    
    try {
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
