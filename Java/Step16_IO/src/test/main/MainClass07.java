package test.main;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class MainClass07 {
  public static void main(String[] args) {
    
    FileInputStream fis=null;
    FileOutputStream fos=null;
    try {
      fis = new FileInputStream("C:\\Users\\user\\playground\\code\\myFolder\\1.jpg");
      fos = new FileOutputStream("C:\\Users\\user\\playground\\code\\myFolder\\copied.jpg");
      
      byte[] buffer = new byte[1024];
      
      while(true) {
	int readedCount = fis.read(buffer);
	if(readedCount == -1) break;
	System.out.println("read" + readedCount);
	
	
	fos.write(buffer, 0, readedCount);
	fos.flush();
      }
    } catch(Exception e00) {
      e00.printStackTrace();
    } finally {
      try {
	
	if(fis!=null) fis.close();
	if(fos!=null) fos.close();
      } catch (IOException e01) {
	e01.printStackTrace();
      }      
    }
  } // end of main
}