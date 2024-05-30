package com.ezfuzzy.demo.service;

import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import com.ezfuzzy.demo.repository.PostRepository;
import com.ezfuzzy.demo.model.Post;
import java.util.List;


@Service
@RequiredArgsConstructor
public class PostService {
  private final PostRepository postRepository;

  public List<Post> postList() {
    return postRepository.findAll();
  }
}
