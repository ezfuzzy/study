package test.main;


import test.mypac.MyWeapon;
import test.mypac.Weapon;

public class MainClass01 {
  public static void main(String[] args) {
    
            
//    Weapon w1 = new Weapon();
//    w1.prepare();
    String str = "gun";
    Weapon w2 = new MyWeapon(str);
    w2.prepare();
    w2.attack();

  }
}
