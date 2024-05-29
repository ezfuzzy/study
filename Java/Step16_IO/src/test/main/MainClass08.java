package test.main;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

import test.dto.MemberDto;

public class MainClass08 {
  public static void main(String[] args) {
    
    MemberDto dto = new MemberDto(1, "ez", "ds");
    MemberDto dto01;
    FileOutputStream fos = null;
    ObjectOutputStream oos = null;
    
    FileInputStream fis = null;
    ObjectInputStream ois = null;
    
    try {
//      fos = new FileOutputStream("C:\\Users\\user\\playground\\code\\myFolder\\member.dat");
//      oos = new ObjectOutputStream(fos);
//      oos.writeObject(dto);
      fis = new FileInputStream("C:\\Users\\user\\playground\\code\\myFolder\\member.dat");
      ois = new ObjectInputStream(fis);
      dto01 = (MemberDto)ois.readObject();
      String info = String.format("num: %d, name: %s, addr: %s",
	  dto01.getNum(), dto01.getName(), dto01.getAddr());
      System.out.println(info);
//      fos.flush();
      System.out.println("nave ~ ");
    } catch(Exception e00) {
      e00.printStackTrace();
    } finally {
      try {
	if(fos != null) fos.close();
	if(fis != null) fis.close();
      } catch (Exception e01) {
	e01.printStackTrace();
      }
    }
  }
}
