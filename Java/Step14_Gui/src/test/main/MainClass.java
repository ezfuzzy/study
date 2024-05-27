package test.main;

import frame07.MyFrame;
import javax.swing.JFrame;

public class MainClass {
  
  public static void main(String[] args) {
    MyFrame f = new MyFrame("My Frame");
    
    f.setBounds(100, 100, 500, 500);
    f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    f.setVisible(true);
  }
}
