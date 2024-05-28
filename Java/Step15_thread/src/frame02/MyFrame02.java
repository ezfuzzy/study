package frame02;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;

public class MyFrame02 extends JFrame implements ActionListener {

  public MyFrame02(String title) {
    super(title);
    
    setLayout(new FlowLayout(FlowLayout.CENTER));
    
    var startBtn00 = new JButton("start00");
    add(startBtn00);
    
    startBtn00.addActionListener(this);

  }
  
  public static void main(String[] args) {
    MyFrame02 f = new MyFrame02("thread Frame");
    f.setBounds(100, 100, 500, 500);
    f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    f.setVisible(true);
  }
  
   
  @Override
  public void actionPerformed(ActionEvent e) {
    // case 1: with ConuntRunnable class
    // new Thread(new CountRunnable()).start();
    
    /* case 2: inner class ? 
    new Thread(new Runnable() {

      @Override
      public void run() {
	 int count = 10;
	    while(true) {
	      if(count == -1) break;
	      System.out.println("count: " + count--);
	      
	      try {
		Thread.sleep(1 * 1000);
	      } catch(Exception e1) {
		e1.printStackTrace();
	      }
	      
	    }
      }
      
    }).start();*/
    
    // case 3: minimalize
    new Thread(() -> { // 여기서 this를 사용하면 밖으로 빠져나감 (함수형이라 그런거같음)
      int count = 10;
      	while(true) {
      	  if(count == -1) break;
      	  System.out.println("count: " + count--);
    	   
      	  try {
      	    Thread.sleep(1 * 1000);
      	  } catch(Exception e1) {
      	    e1.printStackTrace();
      	  }
	}
    }).start();
    
  }
}
