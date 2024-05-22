package test.mypac;

public abstract class Weapon {
  
  public void prepare() {
    System.out.println("ready weapon");
  }
  
  public abstract void attack();
}
