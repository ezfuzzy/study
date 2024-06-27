package com.ezfuzzy.demo.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ezfuzzy.demo.model.Post;

public interface PostRepository extends JpaRepository<Post, UUID> {
  
}
