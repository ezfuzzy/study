package test.main;

import test.mypac.MyWeapon;
import test.mypac.Weapon;

public class MainClass02 {
  public static void main(String[] args) {
//    MainClass02.test();
//    test();
//    String str = "ezezezeze";
//    MainClass02.useString(str);
//    useString(str);
    Weapon w00 = new MyWeapon("w00");
    useWeapon(w00);
  }
  public static void useWeapon(Weapon _w) {
    _w.prepare();
    _w.attack();
  }

  public static void test() {
    System.out.println("static test() method");
  }
  
  public static void useString(String str) {
    System.out.println("useString()" + str);
  }
}