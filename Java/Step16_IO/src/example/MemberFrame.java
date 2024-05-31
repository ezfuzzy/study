package example;

import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.JTextField;
import javax.swing.table.DefaultTableModel;

import test.dto.MemberDto;

public class MemberFrame extends JFrame implements ActionListener {

  JTextField inputNum, inputName, inputAddr;
  JButton addBtn = null, delBtn = null;
  DefaultTableModel model;
  JTable table00 = null;
  File file = null;
  
  List<MemberDto> list = new ArrayList<>();
  
  FileInputStream fis = null;
  FileOutputStream fos = null;
  
  ObjectInputStream ois = null;
  ObjectOutputStream oos = null;
  
  
  public MemberFrame(String title) {
    super(title);
    setLayout(new BorderLayout());
    
    // === interface ===
    JLabel label1=new JLabel("번호");
    JLabel label2=new JLabel("이름");
    JLabel label3=new JLabel("주소");	

    inputNum=new JTextField(10);
    inputName=new JTextField(10);
    inputAddr=new JTextField(10);

    addBtn=new JButton("추가");
    delBtn=new JButton("삭제");
    
    //페널에 UI 배치
    JPanel panel=new JPanel();
    panel.add(label1);
    panel.add(inputNum);
    panel.add(label2);
    panel.add(inputName);
    panel.add(label3);
    panel.add(inputAddr);
    panel.add(addBtn);
    panel.add(delBtn);
    
    //페널을 프레임의 위쪽에 배치
    add(panel, BorderLayout.NORTH);

    table00 = new JTable();
    String[] colNames = {"num", "name", "addr"};
    
    model = new DefaultTableModel(colNames, 0);
    table00.setModel(model); // standard row
    JScrollPane scroll = new JScrollPane(table00);
    add(scroll, BorderLayout.CENTER);
    
    
    // === alias ===
    addBtn.setActionCommand("add");
    delBtn.setActionCommand("del");
    
    
    
    //  === method === 
    addBtn.addActionListener(this);
    delBtn.addActionListener(this);
    
    // === load ===
    loadFromFile();
    refreshTable();
    
   
  }
  
  public static void main(String[] args) {
    MemberFrame frame = new MemberFrame(" 회원 정보 관리 ");
    frame.setDefaultCloseOperation(EXIT_ON_CLOSE);
    frame.setBounds(100, 100, 700, 500);
    frame.setVisible(true);
  }

  @Override
  public void actionPerformed(ActionEvent e) { 
    String cmd = e.getActionCommand();
    /*
     * java에서 문자열 내용이 같아도 참조값이 다른 경우가 있어서
     * 문자열의 내용을 check할떄 ==대신 equals를 사용해야함.
     */
    
    if(cmd.equals("add")) {
      int num = Integer.parseInt(inputNum.getText());
      String name = inputName.getText();
      String addr = inputAddr.getText();
      
      MemberDto dto = new MemberDto(num, name, addr);
      list.add(dto);
    } else if (cmd.equals("del")) {
      int selectedRow = table00.getSelectedRow();
      if(selectedRow == -1) {
	JOptionPane.showMessageDialog(this, "select the row");
	return;
      }
      list.remove(selectedRow);
      
    }
    
    
    refreshTable();
    saveToFile();
  }
  
  public void loadFromFile() {
    
    try {
      file = new File("C:\\Users\\user\\playground\\code\\myFolder\\members.dat");
      if(!file.exists()) file.createNewFile();
      if(file.length() == 0) return;

      fis = new FileInputStream(file);
      ois = new ObjectInputStream(fis);

      list = (List<MemberDto>)ois.readObject();
      
    } catch (Exception e01) {
      e01.printStackTrace();
    } finally {
      try {
	if(ois != null) ois.close();
	if(fis != null) fis.close();
      } catch (Exception e02) {
	e02.printStackTrace();
      }
    }
  }
  
  public void refreshTable() {
    if(list == null) return;
    
    model.setRowCount(0);
    list.forEach((people) -> {
      
      Object[] curData = { people.getNum(), people.getName(), people.getAddr() };
      
      model.addRow(curData);
    });
  }
  
  
  public void saveToFile() {
    
    
    try {
      file = new File("C:\\Users\\user\\playground\\code\\myFolder\\members.dat");
      if(!file.exists()) file.createNewFile();
      
      fos = new FileOutputStream(file);
      oos = new ObjectOutputStream(fos);
      
      oos.writeObject(list);
      oos.flush();
    } catch (Exception e01) {
      e01.printStackTrace();
    } finally {
      try {
	if (oos != null) oos.close();
	if (fos != null) fos.close();
      } catch (Exception e02) {e02.printStackTrace();}
    }
  }
  
}
