package test.main;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public class MainClass02 {
  public static void main(String[] args) {
    InputStream kbd = System.in;
    var isr = new InputStreamReader(kbd);
    var br = new BufferedReader(isr);
    
    System.out.print("input: ");
    try {
      String line = br.readLine();
      System.out.println("output: " + line);
      
      // ? Scanner scan = new Scanner(System.in)
      // scan.next(), nexInt() ... 
      
      
//      int code = isr.read();
//      System.out.println("code: " + code);
//      
//      char ch = (char)code;
//      System.out.println("ch: " + ch);
    } catch(IOException e1) {
      e1.printStackTrace();
    }
    
    
  }
}
