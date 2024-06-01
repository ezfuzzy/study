package com.ezfuzzy.demo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ezfuzzy.demo.model.Post;


@Mapper
public interface PostMapper {
  public List<Post> listPost();
}
