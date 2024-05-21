package test.main;
import java.io.PrintStream;
import test.mypac.Car;
import test.mypac.SquareObj;
public class MainClass02 {
  
  public static void main(String[] args) {
    Car car1 = new Car();
    car1.name = "Lambourgini";
    car1.drive();
    PrintStream gg = System.out;
    gg.println("asd");	
    
    SquareObj rec = new SquareObj();
    rec.width = 5;
    rec.height = 10;
    rec.cal();
    
  }
}

