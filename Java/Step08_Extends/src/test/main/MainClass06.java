package test.main;

import test.auto.Car;
import test.auto.Engine;
import test.auto.SprotsCar;

public class MainClass06 {
  public static void main(String[] args) {
    Engine e1 = new Engine();
    e1.e_name = "v1 Engine";
    
    Car car1 = new Car(e1);
    car1.drive();
    
    SprotsCar sc1 = new SprotsCar(e1);
    sc1.drive();
    sc1.openDrive();
  }
}
