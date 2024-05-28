package frame00;

import java.awt.FlowLayout;

import javax.swing.JButton;
import javax.swing.JFrame;

public class MyFrame00 extends JFrame {

  public MyFrame00(String title) {
    super(title);
    
    setLayout(new FlowLayout(FlowLayout.CENTER));
    
    var startBtn00 = new JButton("start00");
    add(startBtn00);
    
    startBtn00.addActionListener((e) -> {
      System.out.println("3 secs");
      
      try {
	Thread.sleep(3*1000);
      } catch (Exception e1) {
	e1.printStackTrace();
      }
      System.out.println("3 done");
    });
    
    var startBtn01 = new JButton("start01");
    add(startBtn01);
    startBtn01.addActionListener((e) -> {
      WorkThread00 wt00 = new WorkThread00();
      wt00.start();
    });
  }
  
  public static void main(String[] args) {
    MyFrame00 f = new MyFrame00("thread Frame");
    f.setBounds(100, 100, 500, 500);
    f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    f.setVisible(true);
  }
}
