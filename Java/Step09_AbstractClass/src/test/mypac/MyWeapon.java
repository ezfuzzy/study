package test.mypac;

public class MyWeapon extends Weapon{
  
  public String w_name;
  
  public MyWeapon(String _w_name) {
    this.w_name = _w_name;
  }
  
  public void attack() {
    System.out.println(w_name + " my attack");
  }

}
