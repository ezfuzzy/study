package test.main;

import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintStream;

public class MainClass03 {
  public static void main(String[] args) {
    PrintStream ps = System.out;
    OutputStream os = ps;
    // Object.OutputStream.FilterOutputStream.PrintStream
    var osw = new OutputStreamWriter(os);
    
    try {
      osw.write(97);
      osw.write(98);
      osw.write(44032);
      osw.write("\n");
      osw.write("하연");
      osw.flush();
    } catch (IOException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
    
  }
}
