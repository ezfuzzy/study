package test.main;

import test.mypac.Iphone;
import test.mypac.Phone;

public class MainClass02 {
  public static void main(String[] args) {
    Iphone ph1 = new Iphone();
    
    Phone ph2 = new Iphone(); // Phone 
    
    Object ph3 = new Iphone(); // Obj
    
    // possible
    Phone ph4 = ph1;
    Object ph5 = ph1;
    
    
    // casting 
    Object ph10 = new Iphone();
//    Phone ph11 = ph10; error
    Phone ph12 = (Phone)ph10;
//    Iphone ph13 = ph10; error
    Iphone ph14 = (Iphone)ph10;
    
  }
}
