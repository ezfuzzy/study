package test.main;

import javax.swing.Box;

import test.mypac.Apple;
import test.mypac.FruitBox;
import test.mypac.Melon;
import test.mypac.Orange;

public class MainClass01 {
	public static void main(String[] args) {
		FruitBox<Apple> fb00 = new FruitBox<>();
		fb00.pack(new Apple());
		
		FruitBox<Melon> fb01 = new FruitBox<>();
		fb01.pack(new Melon());
		
		FruitBox<Orange> fb02 = new FruitBox<>();
		fb02.pack(new Orange());
		
		System.out.println(fb00.unPack());
		System.out.println(fb01.unPack());
		System.out.println(fb02.unPack());
	}
}
