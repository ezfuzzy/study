package test.main;

import test.mypac.Weapon;

public class MainClass05 {
  
  
  static class SeaWeapon extends Weapon{
    @Override
    public void attack() {
      
      System.out.println("..");
    }
  }
  
  public static void main(String[] args) {
    Weapon w1 = new SeaWeapon();
    w1.attack();
    
    class SpaceWeapon extends Weapon{
      public void attack() {
	System.out.println(" gogospace ");
      }
    }
    
    Weapon w2 = new SpaceWeapon();
    w2.attack();
    Weapon w3 = new Weapon() {
      
      @Override
      public void attack() {
	System.out.println("w3 atack");
      }
    };
    
    useWeapon(w3);
    useWeapon(new Weapon() {
      
      @Override
      public void attack() {
	System.out.println("w4 atack");
      }
    });
    
  }
  
  public static void useWeapon(Weapon _w) {
    _w.prepare();
    _w.attack();
  }
}
