package test.mypac;


@FunctionalInterface // only one abstract method
public interface Calc {
	
	public double execute(double num1, double num2);
}
