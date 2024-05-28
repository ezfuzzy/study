package test.main;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class QuizMain {
  public static void main(String[] args) {

    File file = new File("C:\\Users\\user\\playground\\code\\myFolder\\memo.txt");
    
    try {
      file.createNewFile();
      FileWriter fw = new FileWriter(file);
      fw.write("cool");
      fw.flush();
      fw.close();
    } catch (IOException e) {
      e.printStackTrace();
    }
    
  }
}
