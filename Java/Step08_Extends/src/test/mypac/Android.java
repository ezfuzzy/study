package test.mypac;


public class Android extends Phone{
  
  public Android() {
    System.out.println("Super Duper Recording Call");
  }
  public void call() {
    System.out.println("call start, recording start");
  }
  
  @Override
  public void takePicture() {
//    super.takePicture(); > parent's function call 
    System.out.println("Android take picture. ");
  }
}
