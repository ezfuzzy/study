package frame03;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

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
    
    ActionListener listener = new ActionListener() { // > anonymous inner class

      @Override 
      public void actionPerformed(ActionEvent e) {
	System.out.println(e);
	
      }
    };
    // btn01
    JButton btn01 = new JButton("btn01");
    this.add(btn01);
    
    btn01.addActionListener(listener);
    
    // btn02 
    JButton btn02 = new JButton("btn02");
    this.add(btn02);
    
    btn02.addActionListener((e) -> { // override 
      System.out.println("=== btn02 ===");
      System.out.println(e);
    });
  
      
    this.setVisible(true);
    
  }
  
  public static void main(String[] args) {
    new MyFrame();
    
  }
}