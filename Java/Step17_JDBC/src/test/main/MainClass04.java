package test.main;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class MainClass04 {
  public static void main(String[] args) {
    Connection conn = null;
    
    int num = 1;
    
    try {
      Class.forName("oracle.jdbc.driver.OracleDriver");
      String url = "jdbc:oracle:thin:@localhost:1521:xe";
      conn = DriverManager.getConnection(url, "scott", "tiger");
      
    } catch (Exception e00) {
      e00.printStackTrace();
    }
    
    PreparedStatement pstmt = null;
    
    try {
      String sql = "delete from member"
	  + " where num = ?";
      pstmt = conn.prepareStatement(sql);
      pstmt.setInt(1, 5);
      int rowCount = pstmt.executeUpdate();
      System.out.println(rowCount + "개의 행이 변경되었습니다.");
      
    } catch (Exception e01) {
      e01.printStackTrace();
    } finally {
      try {
	if(conn != null) conn.close();
      } catch (Exception e02) {
	e02.printStackTrace();
      }
    }
    
  }
}
