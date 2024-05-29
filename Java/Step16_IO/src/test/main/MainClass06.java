package test.main;

import java.io.FileInputStream;
import java.io.FileOutputStream;

public class MainClass06 {
  public static void main(String[] args) {
    
    try {
      var fis = new FileInputStream("C:\\Users\\user\\playground\\code\\myFolder\\1.jpg");
      var fos = new FileOutputStream("C:\\Users\\user\\playground\\code\\myFolder\\copied.jpg");
    
      
      byte[] buffer = new byte[1024];
      
      while(true) {
	int readedCount = fis.read(buffer);
	if(readedCount == -1) break;
	System.out.println("read" + readedCount);
	
	
	fos.write(buffer, 0, readedCount);
	fos.flush();
      }
      fis.close();
      fos.close();
    } catch(Exception e) {
      e.printStackTrace();
    }
  }
}