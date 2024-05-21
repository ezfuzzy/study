package test.main;

import test.mypac.Zoo;
import test.mypac.Zoo.Monkey;
import test.mypac.Zoo.Tiger;

public class MainClass03 {
  public static void main(String[] args) {
    Zoo z1 = new Zoo();
    Monkey m1 = z1.getMonkey();
    m1.say();
    
    Zoo z2 = new Zoo();
    Tiger t1 = z2.getTiger(); // Zoo.Tiger도 가능 (tiger import 불가시) 
    t1.say();
    
    
  }
}
