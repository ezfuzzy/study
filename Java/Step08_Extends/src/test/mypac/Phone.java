package test.mypac;

import java.util.spi.AbstractResourceBundleProvider;

public class Phone { // default는 extends Object.  
  
  public Phone() {
    System.out.println("Contructor of Phone");
  }
  
  public void call() {
    System.out.println("calling ... ");
  }
  
  public void takePicture() {
    System.out.println("taking picture");
  }
  
  public void doInternet() {
    System.out.println("networking.");
  }
}
