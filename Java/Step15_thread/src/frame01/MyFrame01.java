package frame01;

import java.awt.FlowLayout;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JOptionPane;

import frame00.WorkThread00;

public class MyFrame01 extends JFrame {

  public MyFrame01(String title) {
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
    
    startBtn01.addActionListener((e)->{
	new WorkThread00().start();
    });
  }

}
