package test.main;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

import test.mypac.Car;

public class MainClass04 {
	
	public static void main(String[] args) {
		List<Car> cars = new ArrayList<>();
		
		Car c00 = new Car("Grandeur");
		Car c01 = new Car("Tesla");
		Car c02 = new Car("Audi");
		
		cars.add(c00);
		cars.add(c01);
		cars.add(c02);
		
		System.out.println("== 1. normal for format ==");
		for (int i = 0; i < cars.size(); i++) {
			cars.get(i).drive();
		}
		
		System.out.println("== 2. extend for format ==");
		for(Car _car: cars) {
			_car.drive();
		}
		
		
		System.out.println("== 3. forEach format ==");
		cars.forEach(_car -> _car.drive());
		
		System.out.println("== 4. forEach format using Consumer ==");
		Consumer<Car> printCar = (item) -> { 
			item.drive();
		};
	
		cars.forEach(printCar);
		
	}	 // end of main
	
}
