function solution(T) {
    const hours = Math.floor(T / 3600);
    const minutes = Math.floor((T % 3600) / 60);
    const remainingSeconds = T % 60;
  
    const h = hours > 0 ? `${hours}h` : '';
    const m = minutes > 0 ? `${minutes}m` : '';
    const s = remainingSeconds >= 0 ? `${remainingSeconds}s` : '';

  return `${h}${m}${s}`;
}