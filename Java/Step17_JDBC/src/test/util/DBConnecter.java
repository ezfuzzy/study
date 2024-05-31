package test.util;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConnecter {
  
  private Connection connection;
  
  public DBConnecter(String id, String pwd) {
    try {
      Class.forName("oracle.jdbc.driver.OracleDriver");
      String url = "jdbc:oracle:thin:@localhost:1521:xe";
      connection = DriverManager.getConnection(url, id, pwd);
    } catch (Exception e00) {
      e00.printStackTrace();
    } 
  }
  
  public Connection getConn() {
    return connection;
  }
  
  
}
