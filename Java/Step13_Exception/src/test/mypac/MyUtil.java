package test.mypac;

public class MyUtil {
  public static void draw() {
    System.out.println("taking 5 secs");
    try {
      Thread.sleep(5000);
    } catch (InterruptedException e) {
      e.printStackTrace();
    }
    System.out.println("5secs done");
  }
  
  public static void send() throws InterruptedException {
    System.out.println("taking 3 secs");
    Thread.sleep(3000);
    System.out.println("3secs done");
  }
  
}
