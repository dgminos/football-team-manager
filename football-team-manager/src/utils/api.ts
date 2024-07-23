const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_API_KEY;
const API_URL = 'https://apiv3.apifootball.com/';

const searchPlayers = async (name: string) => {
  const response = await fetch(`${API_URL}?action=get_players&player_name=${name}&APIkey=${API_KEY}`);
  const data = await response.json();
  return data;
};

export default searchPlayers