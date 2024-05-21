package test.main;

import test.mypac.Android;
import test.mypac.Phone;

public class MainClass04 {
  public static void main(String[] args) {
    Phone p1 = new Phone();
    
    Android p2 = (Android)p1;
    
    p2.doInternet();
    
    
  }
}
