package com.ezfuzzy.demo.repository;

import com.ezfuzzy.demo.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface PostRepository extends JpaRepository<Post, UUID> {

}
