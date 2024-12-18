type Idade = number;
type Pessoa = {
  nome: string,
  idade: Idade,
  salario: number,
  favoriteGame?: FavGame,

};
type ImmSim = 'Deus Ex' | 'Arx Fatalis' | 'System Shock' | 'Dishonored';
type RPG = 'Chrono Trigger' | 'Final Fantasy' | 'Enchant Farm' | 'Disco Elysium';
type FavGame = ImmSim | RPG;

const p1: Pessoa = {
  nome: 'Joao',
  idade: 19,
  salario: 0,
  favoriteGame: 'Dishonored'
};
