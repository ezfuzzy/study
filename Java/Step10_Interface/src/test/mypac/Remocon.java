package test.mypac;

public interface Remocon {
  /* 
   * field: only static final
   * static: generate with Remocon inf in static area.
   * final : const
   */
  public static final String Company = "LG";
  
  // methods: only abstract methods 
  public void up();
  public void down();
}
