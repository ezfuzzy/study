package test.mypac;

public class FruitBox<FruitType> {
	
	private FruitType item;
	
	public void pack(FruitType _item) {
		this.item = _item;
	}
	
	public FruitType unPack() {
		return this.item;
	}
}
