export interface TelegramPost {
  id: string;
  title: string;
  summary: string;
  imageUrl?: string;
  date: string;
  category: string;
  link: string;
}

export const fetchTelegramPosts = async (): Promise<TelegramPost[]> => {
  try {
    // Ветка main, репозиторий itservicepgatk/pgatk-website-preview
    const dataUrl = 'https://raw.githubusercontent.com/itservicepgatk/pgatk-website-preview/main/public/data/telegram_news.json';
    
    // Добавляем timestamp чтобы сбросить жесткое кеширование браузера
    // GitHub сам кэширует на 5 минут, поэтому мы добавляем метку округленную до 5 минут
    const timeBucket = Math.floor(Date.now() / 300000); 
    const response = await fetch(`${dataUrl}?t=${timeBucket}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts: TelegramPost[] = await response.json();
    return posts;

  } catch (error) {
    console.error('Failed to fetch Telegram posts from static JSON:', error);
    return [];
  }
};
