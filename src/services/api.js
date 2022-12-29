/* eslint-disable no-unused-vars */
import useFetch from "./useFetch";

const TMDB_API_KEY = "5723c753b977e97785f5d71e4a3851ba"
const API_BASE_URL = "https://api.themoviedb.org/3",
TRENDING_BASE_URL = `${API_BASE_URL}/trending/all/day?api_key=${TMDB_API_KEY}`,
SEARCH_BASE_URL = `${API_BASE_URL}/search/multi?api_key=${TMDB_API_KEY}&language=en-US`,
IMAGE_BASE_URL = "https://image.tmdb.org/t/p",
// posterImgURL = "https://image.tmdb.org/t/p/original",	

TMDB = {
	getMoviesAndTV: async(page, searchTerm="") => {
		const resp = await fetch(searchTerm 
			? `${SEARCH_BASE_URL}&query=${searchTerm}&page=${page}`
			: `${TRENDING_BASE_URL}&page=${page}`
		)

		const titles = await resp.json()
		
		titles.results = titles.results
			.filter(res => res.media_type !== "person")
			.map(title => ({
				...title,
				backdrop_path: title.backdrop_path ? IMAGE_BASE_URL + "/w1280" + title.backdrop_path : null,
				poster_path: title.poster_path ? IMAGE_BASE_URL + "/w342" + title.poster_path : null,
				title: title.media_type === "movie" ? title.title : title.name 
			}))

		return titles
	},
    
	getTitle: async(type, id) => {
        // eslint-disable-next-line no-console

		const res = await fetch(`${API_BASE_URL}/${type}/${id}?api_key=${TMDB_API_KEY}`)
		const data = await res.json()
		if(data) {
			const title = {
				...data,
				backdrop_path: data.backdrop_path ? IMAGE_BASE_URL + "/w1280" + data.backdrop_path : null,
				poster_path: data.poster_path ? IMAGE_BASE_URL + "/w500" + data.poster_path : null,
				name: type === "movie" ? data.title : data.name,
				runtime: data.runtime !== undefined ? data.runtime : data.episode_run_time[0],
				release_date: data.release_date ? data.release_date : data.first_air_date,
			}

			return title
		}

		return false
	},
	getActors: async(type, id) => {
		const res = await fetch(`${API_BASE_URL}/${type}/${id}/credits?api_key=${TMDB_API_KEY}`)
		const credits = await res.json()
		let actors

		if (credits) {
			actors = credits.cast.map(actor => ({
				...actor,
				profile_path: actor.profile_path ? IMAGE_BASE_URL + "/w185" + actor.profile_path: null,
			}))
		}
		return actors
	},
	getActor: async (id) => {
		const respData = await fetch(`${API_BASE_URL}/person/${id}?api_key=${TMDB_API_KEY}`)
		const respLinks = await fetch(`${API_BASE_URL}/person/${id}/external_ids?api_key=${TMDB_API_KEY}`)

		const actor = {
			data: await respData.json(),
			links: await respLinks.json(),
		} 

		return {
			links: {
				imdb:
					actor.links.imdb_id
					? "http://imdb.com/name/" + actor.links.imdb_id : null,
				twitter: 
					actor.links.twitter_id 
					? "http://twitter.com/" + actor.links.twitter_id : null,
				instagram:
					actor.links.instagram_id 
					? "http://instagram.com/" + actor.links.instagram_id : null,
				facebook:
					actor.links.facebook_id
					? "http://facebook.com/" + actor.links.facebook_id : null,
			},
			data: {
				...actor, 
				profile_path: 
					actor.profile_path 
					? IMAGE_BASE_URL + "/h632" + actor.profile_path : null,
			}
		}
	}
}

export default TMDB