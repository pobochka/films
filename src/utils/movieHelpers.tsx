export const getPosterURL = (posterPath: string | null): string => {
  if (!posterPath) {
    return "https://via.placeholder.com/500x750?text=No+Image";
  }
  return `https://image.tmdb.org/t/p/w500${posterPath}`;
};

export const formatRating = (rating: number): string => {
  if (!rating || rating === 0) {
    return `No rating`;
  }
  return rating.toFixed(2);
};

export const formatDate = (dateString: string): string => {
  if (!dateString) return "Date: unknown";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
