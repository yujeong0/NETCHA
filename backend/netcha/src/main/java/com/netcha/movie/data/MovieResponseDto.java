package com.netcha.movie.data;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class MovieResponseDto {
	private long no;
	private String movieId;
	private String movieSeq;
	private String title;
	private String scenario;
	private String[] country;
	private String[] company;
	private long time;
	private String[] ganre;
	private long open;
	private String[] directors;
	private String[] casts;
	private String[] keywords;
	private String rating;
	private String posterUrl;
	private String[] imageUrl;
	private long totalView;
	private float avgRank;
	
	public MovieResponseDto(Movie movie) {
		this.no = movie.getNo();
		this.movieId = movie.getMovieId();
		this.movieSeq = movie.getMovieSeq();
		this.title = movie.getTitle();
		this.scenario = movie.getScenario();
		this.country = movie.getCountry().split(",");
		this.company = movie.getCompany().split(",");
		this.time = movie.getTime();
		this.ganre = movie.getGanre().split(",");
		this.open = movie.getOpen();
		this.directors = movie.getDirectors().split(",");
		this.casts = movie.getCasts().split(",");
		this.keywords = movie.getKeywords().split(",");
		this.rating = movie.getRating();
		this.posterUrl = movie.getPosterUrl();
		this.imageUrl = movie.getImageUrl().split(",");
		this.totalView = movie.getTotalView();
		float sum = 0;
		if(movie.getMovieRank().size() != 0) {
			for(int i=0; i<movie.getMovieRank().size(); i++) sum += movie.getMovieRank().get(i).getRank();
			this.avgRank = (float)((int)(sum / movie.getMovieRank().size() * 10)) / (float)10;			
		} else this.avgRank = 0;
	}
}
