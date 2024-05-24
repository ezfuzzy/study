package test.main;

import java.util.ArrayList;
import java.util.List;

import test.mypac.PostDto;

public class QuizMain03 {
	public static void main(String[] args) {
		PostDto post00 = new PostDto(1, "mj", "test1");
		PostDto post01 = new PostDto(2, "ez", "test2");
		PostDto post02 = new PostDto(3, "fz", "test3");
		
		List<PostDto> posts = new ArrayList<PostDto>();
		
		posts.add(post00);
		posts.add(post01);
		posts.add(post02);
		
		posts.forEach((curPost)->{
			String info = String.format("num: %d, title: %s, content: %s",
					curPost.getPostNum(), curPost.getPostTitle(), curPost.getPostContent());
			System.out.println(info);
		});
	}
}
