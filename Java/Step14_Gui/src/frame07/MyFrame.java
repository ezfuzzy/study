package frame07;

import java.awt.BorderLayout;
import java.awt.FlowLayout;
import java.awt.MenuItem;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.IOException;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;
import javax.swing.JTextArea;
import javax.swing.JTextField;

public class MyFrame extends JFrame implements ActionListener{

  JMenuItem newItem, openItem, saveItem;
  JMenuBar mb;
  JMenu menu;
  JTextArea ta;
  
  public MyFrame(String title) {
    
    super(title);
    
    setLayout(new BorderLayout()); // EWNS + CENTER
    mb = new JMenuBar();
    menu = new JMenu("File");
    
    newItem = new JMenuItem("New");
    openItem = new JMenuItem("Open");
    saveItem = new JMenuItem("Save");
    
    menu.add(newItem);
    menu.add(openItem);
    menu.add(saveItem);
    mb.add(menu);
    this.setJMenuBar(mb);
    
    ta = new JTextArea();
    add(ta, BorderLayout.CENTER);
    ta.setVisible(false);
    
    newItem.addActionListener(this);
  } // end of MyFrame
  
  

  @Override
  public void actionPerformed(ActionEvent e) {

    Object which = e.getSource();
    
    if(which == newItem) {
      System.out.println("good");
      ta.setVisible(true);
    } else if(which == openItem) {
	
    } else if(which == saveItem) {
      
    }
    
  }

  
}