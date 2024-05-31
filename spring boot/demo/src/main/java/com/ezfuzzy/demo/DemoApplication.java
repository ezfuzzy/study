package com.ezfuzzy.demo;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.ezfuzzy.demo.repository.PostRepository;
import lombok.RequiredArgsConstructor;

import com.ezfuzzy.demo.model.Post;

@SpringBootApplication
@RequiredArgsConstructor
public class DemoApplication implements CommandLineRunner {
	
	private final PostRepository postRepository;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// return 
		
		List<Post> postList = List.of(
      new Post(UUID.randomUUID(), "title1", "chicken", "ezfuzzy", LocalDateTime.now()),
      new Post(UUID.randomUUID(), "title2", "pizza", "ezfuzzy", LocalDateTime.now()),
      new Post(UUID.randomUUID(), "title3", "hayeon", "ezfuzzy", LocalDateTime.now())
    );

		postRepository.saveAll(postList);
	}
}