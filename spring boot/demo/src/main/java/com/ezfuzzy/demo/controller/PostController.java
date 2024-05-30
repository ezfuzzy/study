package com.ezfuzzy.demo.controller;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ezfuzzy.demo.service.PostService;
import com.ezfuzzy.demo.model.Post;
import lombok.RequiredArgsConstructor;
import java.util.UUID;

@RestController
@RequestMapping("/posts")
@RequiredArgsConstructor
public class PostController {
  
  private final PostService postService;

  @GetMapping("/list")
  public List<Post> postList() {
      return postService.postList();
  }

  @GetMapping("/{postId}")
  public Post postInfo(@PathVariable String postId) {
    return new Post(UUID.randomUUID(), "title", "content", "author", LocalDateTime.now());
  }

  
}
