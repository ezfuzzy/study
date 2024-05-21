package test.main;

import test.mypac.Android;
import test.mypac.Phone;

public class MainClass03 {
  public static void main(String[] args) {
    Android a1 = new Android();
    
    a1.takePicture();
    a1.call();
    
    System.out.println("===============");
    Phone p1 = new Android();
    p1.takePicture();
    
    System.out.println("===============");
    Phone p2 = new Phone();
    p2.takePicture();
  }
}
