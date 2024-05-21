package test.main;

import java.util.Scanner;

import test.mypac.Phone;

public class MainClass05 {
  public static void main(String[] args) {
    Object a = 0;
    Object b = true;
    Object c = "fuzzy";
    Object d = new Phone();
    Object f = new Scanner(System.in);
    
    Object[] objs = new Object[5];
    objs[0] = 10;
    objs[1] = true;
    objs[2] = "Kim";
    objs[3] = new Phone();
    objs[4] = new Scanner(System.in);
    
    Phone p1 = (Phone)d;
    p1.call();
    
    Phone p2 = (Phone)objs[3]; // < object type : Phone casting
    p2.call();
  }
}
