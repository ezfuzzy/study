package test.main;

import java.util.Random;

import test.mypac.WowException;

public class MainClass05 {
  public static void main(String[] args) {
    
    Random rand = new Random();
    
    int num00 = rand.nextInt(7)+1;
    try {
      if(num00 == 7) {
        throw new WowException("lucky~");
      } 
    } catch(WowException we) {
      we.printStackTrace();
    }
    
    System.out.println(num00);  
    System.out.println("end of main");
    
    
    
//    Random rand = new Random();
//    
//    int num00 = rand.nextInt(7)+1;
//    
//    if(num00 == 7) {
//      throw new WowException("lucky~"); // > JVM이 예외 처리를 했기 떄문에 ~
//    } 
//    System.out.println(num00); // >> ~ cant execute 
//    System.out.println("end of main");
  }
}
