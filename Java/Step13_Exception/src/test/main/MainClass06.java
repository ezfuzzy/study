package test.main;

public class MainClass06 {
  public static void main(String[] args) {
    int num=0;
    while(true) {
      if(num >= 10) break;
      try {
	Thread.sleep(1000);
      } catch (InterruptedException e) {
	e.printStackTrace();
      } finally {
	num++;
	System.out.println(num + " secs");
      }
    }
  } // end of main
}
