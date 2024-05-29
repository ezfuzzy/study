package test.main;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class QuizMain {
  public static void main(String[] args) {

    File file = new File("C:\\Users\\user\\playground\\code\\myFolder\\memo.txt");
 
    
    
    try {
      Scanner sc = new Scanner(System.in);
      String str = sc.nextLine();
      
      if(!file.exists())
	file.createNewFile();
      
      
      FileWriter fw = new FileWriter(file);
      fw.write(str);
      fw.flush();
      fw.close();
      
      

      var fr = new FileReader(file);
      while(true) {
	int code = fr.read();
	if(code == -1) break;
	char ch = (char)code;
	System.out.print(ch);
      }
      
      var br = new BufferedReader(fr);
      while(true) {
	String line = br.readLine();
	if(line == null) break;
	
	var sb = new StringBuilder();
	sb.append(line);
	sb.append("\r\n");
      }
      
      
      
      
    } catch (IOException e) {
      e.printStackTrace();
    }
    
  }
}
