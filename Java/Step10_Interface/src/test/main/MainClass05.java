package test.main;

import test.mypac.Calc;

public class MainClass05 {
	public static void main(String[] args) {
		Calc c1 = null;
		
		Calc c2 = new Calc() {
			
			@Override
			public double execute(double num1, double num2) {
				
				return 0;
			}
		};
				
		Calc add01 = (num1, num2) -> {
			return num1 + num2;
		};

		double result = add01.execute(10, 20);
		
		// 람다식(lambda funcion format)
		Calc add = (num1, num2)-> num1+num2;
		Calc sub = (num1, num2)-> num1+num2;
		Calc mul = (num1, num2)-> num1+num2;
		Calc div = (num1, num2)-> num1+num2;
		
		double result01 = add.execute(0, 0);
		double result02 = sub.execute(0, 0);
		double result03 = mul.execute(0, 0);
		double result04 = div.execute(0, 0);
		
		
		System.out.println(c2.execute(0, 0));
		
	} // end of main
}
