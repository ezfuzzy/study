package test.mypac;

public class PostDto {
	private int postNum;
	private String postTitle;
	private String postContent;
	
	public PostDto(int postNum, String postTitle, String postContent) {
		super();
		this.postNum = postNum;
		this.postTitle = postTitle;
		this.postContent = postContent;
	}
	public int getPostNum() {
		return postNum;
	}
	public void setPostNum(int postNum) {
		this.postNum = postNum;
	}
	public String getPostTitle() {
		return postTitle;
	}
	public void setPostTitle(String postTitle) {
		this.postTitle = postTitle;
	}
	public String getPostContent() {
		return postContent;
	}
	public void setPostContent(String postContent) {
		this.postContent = postContent;
	}
	
	
}
