package test.main;

import java.io.FileInputStream;
import java.io.FileOutputStream;

public class MainClass05 {
  public static void main(String[] args) {
    
    try {
      var fis = new FileInputStream("C:\\Users\\user\\playground\\code\\myFolder\\1.jpg");
      var fos = new FileOutputStream("C:\\Users\\user\\playground\\code\\myFolder\\copied.jpg");
      while(true) {
	int readByByte = fis.read();
	System.out.print(readByByte);
	if(readByByte == -1) break;
	
	fos.write(readByByte);
	fos.flush();
      }
      fis.close();
      fos.close();
    } catch(Exception e) {
      e.printStackTrace();
    }
  }
}