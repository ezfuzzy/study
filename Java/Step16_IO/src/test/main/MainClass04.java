package test.main;

import java.io.BufferedWriter;
import java.io.IOException;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.PrintStream;

public class MainClass04 {
  public static void main(String[] args) {
    PrintStream ps = System.out;
    OutputStream os = ps;
    var osw = new OutputStreamWriter(os);
    var bw = new BufferedWriter(osw);
    
    try {

      bw.write("gksk");
      bw.newLine();
      
      bw.write("two");
      bw.newLine();

      bw.write("tpt");
      bw.newLine();
      
      bw.write("spt");
      bw.newLine();

      os.flush();
    } catch (IOException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
    
  }
}
