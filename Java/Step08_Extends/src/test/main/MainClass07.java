package test.main;

import test.Util.BaseUtil;
import test.Util.MyUtil;

public class MainClass07 {
  public static void main(String[] args) {
    BaseUtil mu = new MyUtil();
//    mu.clear(); >> error
    mu.send();
    mu.light();
    
    MyUtil mu01 = (MyUtil)mu;
    mu01.clear(); // possible
  }
}
