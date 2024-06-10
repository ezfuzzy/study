package test.frame;

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

import test.dao.MemberDao;
import test.dto.MemberDtodb;

public class MemberFrame extends JFrame implements ActionListener {

  JTextField inputName = null, inputAddr = null;
  JButton addBtn = null, delBtn = null;
  DefaultTableModel model;
  JTable table00 = null;
  File file = null;
  
  List<MemberDtodb> list = new ArrayList<>();
  MemberDao dao = new MemberDao("scott", "tiger"); 
  
  public MemberFrame(String title) {
    super(title);
    setLayout(new BorderLayout());
    
    // === interface ===
    JLabel label2=new JLabel("이름");
    JLabel label3=new JLabel("주소");	

    inputName=new JTextField(10);
    inputAddr=new JTextField(10);

    addBtn=new JButton("추가");
    delBtn=new JButton("삭제");
    
    //페널에 UI 배치
    JPanel panel=new JPanel();
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
      String name = inputName.getText();
      String addr = inputAddr.getText();
      if(name == null || addr == null) { 
	JOptionPane.showMessageDialog(this, "fill the textbox");
	return;
      }
      
      MemberDtodb dto = new MemberDtodb(0, name, addr);
      dao.insert(dto);
      
      inputName.setText(null);
      inputAddr.setText(null);
      
    } else if (cmd.equals("del")) {
      int selectedRow = table00.getSelectedRow();
      if(selectedRow == -1) {
	JOptionPane.showMessageDialog(this, "select the row");
	return;
      }
      // defaultTableModel을 통해 pk 얻기 
      int num = (int)model.getValueAt(selectedRow,0);

      // List<MemberDto> 객체를 통해 pk 얻기
      int num2 = list.get(selectedRow).getNum();
      
      dao.delete(num);
    }
    
    
    refreshTable();
  }
  

  
  public void refreshTable() {
    list = dao.getAllMember();
    
    if(list == null) return;
    
    model.setRowCount(0);
    list.forEach((people) -> {
      
      Object[] curData = { people.getNum(), people.getName(), people.getAddr() };
      
      model.addRow(curData);
    });
  }
  
  
    
}
