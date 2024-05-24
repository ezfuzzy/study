package test.main;

/*
 * RuntimeException을 상속받지 않은 Exception type은 ?? > runtime error
 * !!! process exception using try-catch block !!! 
 */
public class MainClass02 {
  public static void main(String[] args) {
    System.out.println("start main");
    
    
    try {
      Thread.sleep(1000*5);
    } catch (InterruptedException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
    System.out.println("end of main");
    
  } // end of main
}
