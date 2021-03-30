package com.netcha.movie.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
@Entity
@Table(name = "movie_rank")
public class MovieRank {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long no;
	private long userId;
	private float rank;
	private String ganre;
	
	@ManyToOne
	@JoinColumn(name = "movieId")
	private Movie movie; 
}
