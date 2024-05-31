package com.ezfuzzy.demo.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Post {

  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID postId;
  private String title;
  private String content;
  private String author;
  private LocalDateTime createdAt;
}