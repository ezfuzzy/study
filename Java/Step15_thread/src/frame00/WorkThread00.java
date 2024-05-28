package frame00;


public class WorkThread00 extends Thread { // >> 1회용 객체
  
  @Override
  public void run() {
    System.out.println("5 secs");
    try {
      Thread.sleep(5 * 1000);
    } catch(Exception e1) {
      e1.printStackTrace();
    }
    System.out.println("5 done");
  }

}
