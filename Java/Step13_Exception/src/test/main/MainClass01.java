package test.main;

import java.util.Scanner;

public class MainClass01 {
  public static void main(String[] args) {
    
    Scanner sc = new Scanner(System.in);
    System.out.println("input: ");
    String inputNum1 = sc.nextLine();
    
    System.out.println("for div input: ");
    String inputNum2 = sc.nextLine();
    try {
    int num1 = Integer.parseInt(inputNum1);
    int num2 = Integer.parseInt(inputNum2);
    
    int result1 = num1/num2;
    int result2 = num1%num2;
    System.out.println(num1+" / "+num2+": "+result1);
    System.out.println(num1+" % "+num2+": "+result2);
    }catch(Exception e) {
      System.out.println("Error msg: "+ e.getMessage());
    }finally { // ensure: run code
      System.out.println("ensure for run");
    }
//    }catch(NumberFormatException nfe) {
//    }
//      nfe.printStackTrace();
//    }catch(ArithmeticException ae) {
//      ae.printStackTrace();
//    }
    System.out.println("end of main");
  } // end of main 
}
