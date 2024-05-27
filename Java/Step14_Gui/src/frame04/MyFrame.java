package frame04;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;

public class MyFrame extends JFrame implements ActionListener{

  public MyFrame() {
    this.setTitle("My ffframmmeee");
    this.setBounds(100, 100, 500, 500);
    this.setDefaultCloseOperation(EXIT_ON_CLOSE);
    
    FlowLayout layout = new FlowLayout(FlowLayout.CENTER);
    
    setLayout(layout);
     
    JButton btn00 = new JButton("btn02");
    this.add(btn00);
    
    btn00.addActionListener((e) -> { // override 
      System.out.println("=== btn02 ===");
      System.out.println(e);
    });
    
      
    this.setVisible(true);
    
  } // end of MyFrame
  
  public static void main(String[] args) {
    new MyFrame();
    
  }

  @Override
  public void actionPerformed(ActionEvent e) {
    // TODO Auto-generated method stub
    
  }
}