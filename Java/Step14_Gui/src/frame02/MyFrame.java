package frame02;

import java.awt.FlowLayout;

import javax.swing.JButton;
import javax.swing.JFrame;

public class MyFrame extends JFrame{

  public MyFrame() {
    this.setTitle("My ffframmmeee");
    this.setBounds(100, 100, 500, 500);
    this.setDefaultCloseOperation(EXIT_ON_CLOSE);
    
    FlowLayout layout = new FlowLayout(FlowLayout.CENTER);
    /* public class FlowLayout
     * public static final LEFT = 0;
     * public static final CENTER = 1;
     * public static final RIGHT = 2;
    */
    
    setLayout(layout);
    
    JButton btn01 = new JButton("btn01");
    this.add(btn01);
    
    JButton btn02 = new JButton("btn01");
    this.add(btn02);
    
    
    
    this.setVisible(true);
    
  }
  
  public static void main(String[] args) {
    new MyFrame();
    
  }
}