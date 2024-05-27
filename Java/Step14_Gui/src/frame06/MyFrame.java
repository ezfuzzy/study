package frame06;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
import javax.swing.JTextField;

public class MyFrame extends JFrame implements ActionListener{

  JButton createBtn, updateBtn, deleteBtn;
  FlowLayout layout;
  JTextField inputMsg, output;
  
  public MyFrame() {
    this.setTitle("My ffframmmeee");
    this.setBounds(100, 100, 500, 500);
    this.setDefaultCloseOperation(EXIT_ON_CLOSE);
    
    this.layout = new FlowLayout(FlowLayout.CENTER);       
    setLayout(layout);

    this.inputMsg = new JTextField(10);
    add(inputMsg);

    this.output = new JTextField(10);
    add(output);
    
    this.createBtn = new JButton("add");
    this.add(createBtn);
    createBtn.addActionListener(this);
   
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
      String str = inputMsg.getText();
      System.out.println(str);    
      inputMsg.setText("");
      output.setText(str);
      JOptionPane.showMessageDialog(this, str);
    } else if(which == this.updateBtn) {
      System.out.println("update");
      
    } else if(which == this.deleteBtn) {
      System.out.println("delete");
    }
    
    
  }

  
}