export interface Player {
    player_id: string;
    player_name: string;
    player_type: string;
  }
  
  export interface Team {
    id: string;
    name: string;
    players: Player[];
  }
  