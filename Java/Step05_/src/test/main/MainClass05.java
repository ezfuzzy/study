package test.main;

import java.util.Random;

public class MainClass05 {

  public static void main(String[] args) {

    Random r00 = new Random();
    // -10 ~ 10
    int r01 = r00.nextInt(21)-10;
    System.out.println("r01 is : " + r01);
    // 75 ~ 100
    int r02 = r00.nextInt(26)+75;
    System.out.println("r02 is : " + r02);
    // 1 ~ 45
    int r03 = r00.nextInt(45)+1;
    System.out.println("r03 is : " + r03);
    
  }
}
