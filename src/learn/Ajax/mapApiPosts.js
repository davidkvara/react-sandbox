export const mapPosts = post => {
  return post.map(film => ({
    title: film.title,
    release_date: film.release_date,
    director: film.director,
    rt_score: film.rt_score,
    description: film.description,
    id: film.id
  }));
};
