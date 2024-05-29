package frame08;

import java.awt.BorderLayout;
import java.awt.Font;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.FileWriter;

import javax.swing.JFileChooser;
import javax.swing.JFrame;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;

public class MyFrame extends JFrame {

  // interface
  JMenuItem newItem, openItem, saveItem, saveAsItem;
  JMenuBar mb;
  JMenu menu;
  JTextArea ta;
  
  // file 
  File openedFile;
  
  public MyFrame(String title) {
    
    super(title);
    
    setLayout(new BorderLayout()); // EWNS + CENTER
    mb = new JMenuBar();
    menu = new JMenu("File");
    
    newItem = new JMenuItem("New");
    openItem = new JMenuItem("Open");
    saveItem = new JMenuItem("Save");
    saveItem.setEnabled(false);
    saveAsItem = new JMenuItem("SaveAs");
    saveAsItem.setEnabled(false);
    
    menu.add(newItem);
    menu.add(openItem);
    menu.add(saveItem);
    menu.add(saveAsItem);
    mb.add(menu);
    this.setJMenuBar(mb);
    
    ta = new JTextArea();
    JScrollPane scp = new JScrollPane(ta);
    
    add(scp, BorderLayout.CENTER);
    ta.setVisible(false);
    Font font = new Font("Victor mono", Font.PLAIN, 20);
    ta.setFont(font);
    
    newItem.addActionListener((e)->{createNewFile();});
    
    openItem.addActionListener((e)->{loadFromFile();});
    
    saveItem.addActionListener((e)->{saveToSameFileName();});
    
    saveAsItem.addActionListener((e)->{saveToDifferentFileName();});
    
    
    
    
  } // end of MyFrame
  
  public void createNewFile() {
    ta.setVisible(true);
    if(ta.getText() != null) {
      // check if save or not
    }
    ta.setText(null);
    setTitle("No Title");
    saveItem.setEnabled(true);
    saveAsItem.setEnabled(true);
  }

  public void loadFromFile() {
        
    var fc = new JFileChooser("C:\\Users\\user\\playground\\code\\myFolder");
    int result = fc.showOpenDialog(this);
    
    FileReader fr = null;
    BufferedReader br = null;
    
    if(result == JFileChooser.APPROVE_OPTION) {
	openedFile = fc.getSelectedFile();
	setTitle(openedFile.getName());
	ta.setVisible(true);
    }
    
    try {
      fr = new FileReader(openedFile);
      br = new BufferedReader(fr);
     
      StringBuilder content = new StringBuilder();
      String line;
      while((line = br.readLine())!=null) {
	content.append(line).append("\n");
      }
      ta.setText(content.toString());
      ta.setVisible(true);
      saveItem.setEnabled(true);
      saveAsItem.setEnabled(true);
      
    } catch(Exception e00) {
      e00.printStackTrace();
    }finally {
      try {
	if(br != null) br.close();
	if(fr != null) fr.close();
      }catch(Exception e01) {
	
      }
    }
  }
  
  public void saveToSameFileName() {
    if(this.getTitle() == null) return;
    
    BufferedWriter bw = null; 
    try { 
      bw = new BufferedWriter(new FileWriter(openedFile));
      bw.write(ta.getText());      
    } catch (Exception e) {
      e.printStackTrace();
    } finally {
      try {
	if(bw != null) bw.close();
      } catch (Exception e2) {
	e2.printStackTrace();
      }
    }
  }
  
  public void saveToDifferentFileName() {
    
    var fc = new JFileChooser("C:\\Users\\user\\playground\\code\\myFolder");
    int result = fc.showSaveDialog(this);
    
    BufferedWriter bw = null;
    
    if(result == JFileChooser.APPROVE_OPTION) {
	System.out.println("save success");
	openedFile = fc.getSelectedFile();
	setTitle(openedFile.getName());
	
	try {
	  openedFile.createNewFile();
	} catch(Exception e1) {
	  e1.printStackTrace();
	}
    }
    else if(result == JFileChooser.CANCEL_OPTION) System.out.println("cancel");
    else if(result == JFileChooser.ERROR_OPTION) System.out.println("error");
    
    try {
      bw = new BufferedWriter(new FileWriter(openedFile));
      bw.write(ta.getText());      
    } catch (Exception e) {
      e.printStackTrace();
    } finally {
      try {
	if(bw != null) bw.close();
      } catch (Exception e2) {
	e2.printStackTrace();
      }
    }
    
  }
    
  
  
  public static void main(String[] args) {
    MyFrame f = new MyFrame("My Frame");
    
    f.setBounds(100, 100, 500, 500);
    f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    f.setVisible(true);
  }
  
}