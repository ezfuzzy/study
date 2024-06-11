package test.main;

import java.util.Scanner;

public class MainClass {
  public static void main(String[] args) {
      Scanner scan=new Scanner(System.in);
      System.out.println("정수 입력:");
      int num=scan.nextInt();
      /*
      * 위에서 입력받은 숫자가 0 보다 크면 "0보다 큽니다"
      * 그렇지 않으면 "0보다 작아요" 를 콘솔창에 출력하는 코드를
      * 주석 아래쪽에 작성하세요
      */
      if(num > 0) System.out.println("0보다 큽니다");
      else System.out.println("0이하 입니디");
  }
}