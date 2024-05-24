package test.main;


public class QuizMain01 {
  public static void main(String[] args) {
    int hours = 0;
    int mins = 0;
    int secs = 0;
    
    while(true) {
      
      try {
	Thread.sleep(1000);
      } catch (InterruptedException e) {
	e.printStackTrace();
      }
      secs++;
      if(secs == 60) { secs = 0; mins++; }
      if(mins == 60) { mins = 0; hours++; }
      
      String time = String.format("%02d시 %02d분 %02d초",
	  hours, mins, secs);
      System.out.println(time);
    }
    
  }
}
