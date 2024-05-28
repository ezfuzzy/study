package test.main;

import java.io.IOException;
import java.io.InputStream;

public class MainClass01 {
  public static void main(String[] args) {
    InputStream kbd = System.in;
    
    try {
      int code = kbd.read();
      System.out.println("code: " + code);
      
      char ch = (char)code;
      System.out.println("ch: " + ch);
    } catch(IOException e1) {
      e1.printStackTrace();
    }
    
    
  }
}
