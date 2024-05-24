package test.main;

import java.io.File;

public class MainClass04 {
  public static void main(String[] args) {
    System.out.println("start main");
    
    File f01 = new File("C:\\Users\\user\\playground\\code\\myFolder\\memo.txt");
    
    boolean isThere = f01.exists();
    
    if(!isThere) {
      try {f01.createNewFile();} 
      catch (Exception e) {e.printStackTrace();}
    }else {f01.delete();}
    
    
  }
}
