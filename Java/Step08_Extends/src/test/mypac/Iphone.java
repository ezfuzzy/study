package test.mypac;

public class Iphone extends Phone {
  
  public Iphone() {
    System.out.println("Iphone yammy");
  }
  
  public void IphoneCall() {
    System.out.println("iphone calling ...");
  }
  
  @Override
  public void takePicture() {
    System.out.println("picture taken by iphone. ");
  }
}
