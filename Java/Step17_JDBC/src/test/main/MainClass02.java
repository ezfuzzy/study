package test.main;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class MainClass02 {
  public static void main(String[] args) {
    Connection conn = null;
    int num = 3;
    String name = "ezezez", addr = "fzfzfz";
    try {
      Class.forName("oracle.jdbc.driver.OracleDriver");
      String url = "jdbc:oracle:thin:@localhost:1521:xe";
      conn = DriverManager.getConnection(url, "scott", "tiger");
      System.out.println("S A DB");
      
    } catch(Exception e00) {
      e00.printStackTrace();
    }

    PreparedStatement pstmt = null;
    
    try {
      String sql = "insert into member"
	  + " (num, name, addr)"
	  + " values(?, ?, ?)";
      
      // dummy sql query를 통해pstmt객체의 참조값 얻어내기  	
      pstmt = conn.prepareStatement(sql);
      // dummy value를 실질값으로 binding
      pstmt.setInt(1, num);
      pstmt.setString(2, name);
      pstmt.setString(3, addr);
      
      // insert, update, delete
      int rowCount = pstmt.executeUpdate(); // return: 변경된 row의 갯수 
      // auto commit: cmd와 eclipse는 다른 세션임. but 바로바로 적용됨
      
      // select
//      pstmt.executeQuery(); // return: ResultSet 
      
      System.out.println(rowCount + "개의 행이 변경되었습니다.");
//      System.out.println(pstmt.toString());
    } catch (Exception e01) {
      e01.printStackTrace();
    } finally {
      try {
	if (conn != null) conn.close();
      } catch (Exception e02) {
	e02.printStackTrace();
      }
    }
  }
}
