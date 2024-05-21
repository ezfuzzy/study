package test.mypac;

public class MyRemocon implements Remocon{
  
  
  
  @Override
  public void up() {
    System.out.println("channel up");
  }
  
  @Override
  public void down() {
    System.out.println("channel down");
  }
}
