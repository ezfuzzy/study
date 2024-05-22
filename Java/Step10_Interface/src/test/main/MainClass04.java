package test.main;

import test.mypac.Drill;

public class MainClass04 {
  public static void main(String[] args) {
    
    useDrill(new Drill() {
      
      @Override
      public void hole() {
	System.out.println("hole hole hole ");
      }
    });
    // 추상 메소드가 1개인 경우 위, 아래 코드가 동일. 
    useDrill(()->{
      System.out.println("up hole");
    });
  } // end of main
			//위에서 inline으로 정의한 Drill 객체를 가져와서 사용
  public static void useDrill(Drill d) {
    d.hole();
    d.hole();
  }
  
}
