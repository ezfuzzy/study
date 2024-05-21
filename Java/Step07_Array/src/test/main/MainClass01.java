package test.main;

public class MainClass01 {
  public static void main(String[] args) {
    int[] nums00 = {10, 20, 30, 40, 50};
    
    double[] nums01 = {10.0, 20.0, 30.0, 40.0, 50.0};
    
    boolean[] bools00 = { true, true, false, false, true };
    
    String[] strs00 = { "10", "20", "30", "40", "50" };
    
    int[] result = nums00.clone();
    int[] result2 = nums00;
    
    int size = nums00.length;
    int first = nums00[0];
    int second = nums00[1];
    int third = nums00[2];
   
  }
}
