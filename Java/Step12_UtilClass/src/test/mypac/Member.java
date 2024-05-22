package test.mypac;

public class Member {
	
	private int num;
	private String name;
	private String addr;
	
	public Member() {}
	
	public Member(int _num, String _name, String _addr) {
		this.num = _num;
		this.name = _name;
		this.addr = _addr;
	}
	//get set
	
	public int getNum() {
		return this.num;
	}
 
	public String getName() {
		return this.name;
	}
	
	public String getAddr() {
		return this.addr;
	}
	
}
