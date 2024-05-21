package test.main;

import test.mypac.MyRemocon;
import test.mypac.Remocon;

public class MainClass01 {
  public static void main(String[] args) {
    
    // data type은 가능  
    Remocon r1 = null; 
    
    Remocon r2 = new MyRemocon();
    r2.up();
    r2.down();
    
    String result = Remocon.Company;
    

    
  }
}
