package test.mypac;

public class Car {
	private String name;
	
	public Car(String _name) {
		this.name = _name;
	}
	
	public void drive() {
		System.out.println(this.name + " is dirving.");
	}
}
