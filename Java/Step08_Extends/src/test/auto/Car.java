package test.auto;


public class Car {

  protected Engine engine;
  
  public Car(Engine engine) {
    this.engine = engine;
  }
  
  public void drive() {
    if(this.engine == null) {
      System.out.println("no engine");
    }
    else {
      System.out.println(engine.e_name + " go go go");
    }
  }
}
