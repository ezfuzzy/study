package test.main;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class MainClass01 {
  /*
   *  JDBC ( Java DataBase Connectivity )
   *  
   *  DataBase 에 연결해서 SELECT, INSERT, UPDATE, DELETE 작업하기
   *  
   *  Oracle 에 연결하기 위해서는 드라이버 클래스가 들어있는 ojdbc11.jar 파일을
   *  사용할수 있도록 설정해야 한다.
   *  
   *  프로젝트에 마우스 우클릭 => Build Path => Configure Build Path => Librarys 텝 선택
   *  => classpath 선택 => 우측 Add External jar 버튼을 누른후 => ojdbc6.jar 파일을 찾은다음 => Apply 
   */
  public static void main(String[] args) {
    Connection conn = null;
    
    try {
      Class.forName("oracle.jdbc.driver.OracleDriver");
      String url = "jdbc:oracle:thin:@localhost:1521:xe";
      conn = DriverManager.getConnection(url,"scott","tiger");
      System.out.println("Success on access to Oracle DB.");
      
    } catch (Exception e) {
      e.printStackTrace();
    }
    
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    try { // sql문 
      String sql = "select empno, ename, job, sal"
	  + " from emp"
	  + " order by empno asc";
      // pstmt객체의 참조값 얻어내기
      pstmt = conn.prepareStatement(sql);
      // sql문의 결과값을 rs에 저장 
      rs = pstmt.executeQuery(sql);
      // next() ? true : false
      
      while(rs.next()) {
	int empno = rs.getInt("empno");
	String ename = rs.getString("ename");
	String job = rs.getString("job");
	double sal = rs.getDouble("sal");
	
	String info01 = String.format("empno: %5d | ename: %8s | job: %12s | sal: %8.2f",
	    empno, ename, job, sal);
	System.out.println(info01);
      }
      
    } catch (Exception e00) {
      e00.printStackTrace();
    } finally {
      try {
	if(conn != null) conn.close();
      } catch (Exception e01) {
	e01.printStackTrace();
      }
      
    }
    
    
  } // end of main
  	
}
