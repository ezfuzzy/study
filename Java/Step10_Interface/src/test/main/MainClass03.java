package test.main;

import test.mypac.Remocon;
// class 는 단일 상속, 
// interface는 다중 implements. 
public class MainClass03 {
  public static void main(String[] args) {
    
    Remocon r1 = new Remocon() {
      
      @Override
      public void up() {
	System.out.println("volume up");
      }
      
      @Override
      public void down() {
        System.out.println("volume down");
      }
    };
    
    useRemocon(r1);
    
    // inline - 
    useRemocon(new Remocon() {
      
      @Override
      public void up() {
	System.out.println("up up up ");
      }
      
      @Override
      public void down() {
	System.out.println("down down down");
      }
    });
    
    
  } // end of main
  
  public static void useRemocon(Remocon r) {
    r.up();
    r.down();
  }
}
