package test.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import test.dto.MemberDto;
import test.util.DBConnecter;

public class MemberDao { // Data Access Object
  
  Connection conn = null;
  PreparedStatement pstmt = null;
  ResultSet rs = null;
  
  List<MemberDto> curList = null;
  MemberDto curDto = null;
  int rowCount=0;
  
  public MemberDao(String id, String pwd) {
    conn = new DBConnecter("scott", "tiger").getConn();
  }
  
  // C
  public boolean insert(MemberDto dto) {

    try {
      String sql = "insert into member"
    	 + " values(member_seq.nextval, ?, ?)";
     
      pstmt = conn.prepareStatement(sql);
      pstmt.setString(1, dto.getName());
      pstmt.setString(2, dto.getAddr());
      
      rowCount = pstmt.executeUpdate();
    } catch (Exception e01) {
      e01.printStackTrace(); 
    } 
    if(rowCount > 0) return true;
    else return false;
  }
  
  //R
  public List<MemberDto> getAllMember() { 
    
    curList = new ArrayList<>();
    
    try {
      String sql = "select * from member order by num asc";
      
      pstmt = conn.prepareStatement(sql);
      rs = pstmt.executeQuery();
          
      while(rs.next()) {
	curDto = new MemberDto(rs.getInt("num"), rs.getString("name"), rs.getString("addr"));
	curList.add(curDto);
      }
    } catch(Exception e00) {
      e00.printStackTrace();
    } /*
       * finally { try { if(rs != null) rs.close(); if(pstmt != null) pstmt.close();
       * if(conn != null) conn.close();
       * 
       * } catch(Exception e01) { e01.printStackTrace(); }
      
    } */
    
    return curList; // rs ? 
  }
  
  
  public MemberDto getMemberByNum(int num) {
    
    try {
      String sql = "select *"
	  + " from member"
	  + " where num = ?";
      pstmt = conn.prepareStatement(sql);
      pstmt.setInt(1, num);
      
      pstmt.execute();
      rs = pstmt.executeQuery();
      
      if(rs.next()) {
	curDto = new MemberDto(rs.getInt("num"), rs.getString("name"), rs.getString("addr"));
      }
      
      
    } catch(Exception e00) {
      e00.printStackTrace();
    }
    return curDto;
  }
  
  
  //U
  public boolean update(MemberDto dto) { 
    try {
      String sql = "update member"
	  + " set name = ?, addr = ?"
	  + " where num = ?";
      pstmt = conn.prepareStatement(sql);
      pstmt.setString(1, dto.getName());
      pstmt.setString(2, dto.getAddr());
      pstmt.setInt(3, dto.getNum());
      rowCount = pstmt.executeUpdate();
      System.out.println(rowCount + "개의 행이 변경되었습니다.");
      
    } catch(Exception e00) {
      e00.printStackTrace();
    }
    if(rowCount > 0) return true;
    else return false;
  }
  
  // D
  public boolean delete(int num) {
    try {
      String sql = "delete from member"
	  + " where num = ?";
      pstmt = conn.prepareStatement(sql);
      pstmt.setInt(1, num);
      rowCount = pstmt.executeUpdate();
      System.out.println(rowCount + "개의 행이 변경되었습니다.");
    } catch(Exception e00) {
      e00.printStackTrace();
    }
    if(rowCount > 0) return true;
    else return false;
  }
  
  

}
