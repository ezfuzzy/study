package test.auto;

public class SprotsCar extends Car{
  // Car의 default 생성자가 없기 떄문에 error  
  public SprotsCar(Engine engine) {
    super(engine); // > Car의 생성자를 의미. 가장 선행되어야함. 
    
  }
  public void openDrive() {
    if(this.engine == null) {
      System.out.println("no Engine");
    }
    else {
      System.out.println(engine.e_name + " ganzi wow");
    }
  }
}
