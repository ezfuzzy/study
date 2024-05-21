package test.main;

public class MainClass04 {
  
  public static class Mj{
    public void say() {
      System.out.println("im mj");
    }
  }
  
  
  public static void main(String[] args) {
    Mj j = new Mj();
    j.say();
    
    class Cat{
      public void say() {
	System.out.println("nyia~");
      }
    } // > local inner classr
    Cat c = new Cat();
    c.say();
  }
}
