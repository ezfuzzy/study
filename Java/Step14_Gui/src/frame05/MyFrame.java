package frame05;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;

public class MyFrame extends JFrame implements ActionListener{

  JButton createBtn, updateBtn, deleteBtn;
  
  public MyFrame() {
    this.setTitle("My ffframmmeee");
    this.setBounds(100, 100, 500, 500);
    this.setDefaultCloseOperation(EXIT_ON_CLOSE);
    
    FlowLayout layout = new FlowLayout(FlowLayout.CENTER);
    
    setLayout(layout);
     
    this.createBtn = new JButton("createBtn");
    this.updateBtn = new JButton("updateBtn");
    this.deleteBtn = new JButton("deleteBtn");
    
    this.add(createBtn);
    this.add(updateBtn);
    this.add(deleteBtn);

    createBtn.addActionListener(this);
    updateBtn.addActionListener(this);
    deleteBtn.addActionListener(this);
    
    this.setVisible(true);
    
  } // end of MyFrame
  
  public static void main(String[] args) {
    new MyFrame();
  }

  @Override
  public void actionPerformed(ActionEvent e) {

    Object which = e.getSource();
    
    if(which == this.createBtn) {
      System.out.println("create");
    } else if(which == this.updateBtn) {
      System.out.println("update");
    } else if(which == this.deleteBtn) {
      System.out.println("delete");
    }
    
    
  }

  
}