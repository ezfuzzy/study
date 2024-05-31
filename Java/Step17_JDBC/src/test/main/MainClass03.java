package test.main;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class MainClass03 {
  
  public static void main(String[] args) {
    
    Connection conn = null;
    
    int num = 5;
    String name = "sufuzzy", addr = "hongdae";
    
    try {
      Class.forName("oracle.jdbc.driver.OracleDriver");
      String url = "jdbc:oracle:thin:@localhost:1521:xe";
      conn = DriverManager.getConnection(url, "scott", "tiger");
    } catch (Exception e00) {
      e00.printStackTrace();
    }
    
    PreparedStatement pstmt = null;
    
    try {
      String sql = "update member"
	  + " set name = ?, addr = ?"
	  + " where num = ?";
      
      pstmt = conn.prepareStatement(sql);
      
      pstmt.setString(1, name);
      pstmt.setString(2, addr);
      pstmt.setInt(3, num);
      
      int rowCount = pstmt.executeUpdate();
      System.out.println(rowCount + "개의 행이 변경되었습니다.");
    } catch (Exception e01) {
      e01.printStackTrace();
    } finally {
      try {
     	if (conn != null) conn.close();
           } catch (Exception e02) {
     	e02.printStackTrace();
      }
    }
    
    
  } // end of main
}
