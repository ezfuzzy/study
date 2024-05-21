package test.mypac;

public class Zoo {
  
  public String zName;
  
  
  public class Monkey{
    public void say() {
      System.out.println("mokey~");
    }
  }
  
  public class Tiger{
    public void say() {
      System.out.println("tiger~");
    }
  }
  
  public Monkey getMonkey() {
    return new Monkey();
  }
 

  public Tiger getTiger() {
    return new Tiger();
  }
  
}
